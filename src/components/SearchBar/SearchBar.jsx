import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.target;
          const searchQuery = form.elements.query.value;
          onSearch(searchQuery);
          // form.reset();
        }}
      >
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          className={css.searchBarInput}
        />
        <button type="submit" className={css.searchButton}>Search</button>
      </form>
    </header>
  );
}
