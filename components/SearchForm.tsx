import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }:{ query?: string}) => {
    // const query = 'Test'

    
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
        // value={query ? query : ""}
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="button" className="search-btn text-white">
            <Search className="size-5" />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm
