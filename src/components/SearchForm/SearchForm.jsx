import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BtnSearch, Select, SearchFormStyled } from "./SearchForm.styled";

const regions = [
  { id: "africa", value: "africa", name: "Africa" },
  { id: "america", value: "america", name: "America" },
  { id: "asia", value: "asia", name: "Asia" },
  { id: "europe", value: "europe", name: "Europe" },
  { id: "oceania", value: "oceania", name: "Oceania" },
];

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(value);

    setValue("");
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        onChange={onChange}
        value={value}
        aria-label="select"
        name="region"
        required
      >
        <option disabled value="">
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value} style={{ color: "red" }}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};
