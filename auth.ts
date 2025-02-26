import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"

import { AUTHOR_BY_GOOGLEHUB_ID_QUERY } from "./sanity/lib/queries"
import { client } from "./sanity/lib/client"
import { writeClient } from "./sanity/lib/write-client"
// import { profile } from "console"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    // Google,
  ],

  callbacks: {
    async signIn({ 
      account,
      user: { name, email, image},
      profile: { id, login, bio},
    }) {
     
      const existingUser = await client
        .withConfig({useCdn: false})
        .fetch(AUTHOR_BY_GOOGLEHUB_ID_QUERY, {id})

      if(!existingUser){
        await writeClient.create({
          _type: 'author',
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || '',
        })
      }
    
      return true;
      
    },

    async jwt({ token, account, profile}){
      if (account && profile){
        const user = await client
          .withConfig({useCdn: false})
          .fetch(AUTHOR_BY_GOOGLEHUB_ID_QUERY, {
          id: profile?.id,
        });

        
        token.id = user?._id;
        

      }
      return token;
    },

    async session({ session, token}){
      Object.assign(session, {id: token.id});
      return session;
    },
  },
})