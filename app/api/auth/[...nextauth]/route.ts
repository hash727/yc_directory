import { handlers } from "@/auth" // Referring to the auth.ts we just created
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { GET, POST } = handlers
// export const { handlers, auth, signIn, signOut} = NextAuth({
//     providers:[
//         Google({
//             authorization: {
//                 params: {
//                     prompt: "consent",
//                     access_type: "offline",
//                     response_type: "code",
//                 },
//             },
//         }),
//     ],
// })