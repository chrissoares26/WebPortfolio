import React from "react";
import { connect, styled } from "frontity";

/*
 * Author information components
 * age/resedience/freelancer/address filed on left sidebar
 * Author: ojjomedia <info@ojjomedia.com>
 */

const AuthorInfo = ({ state }) => {
  const Author = state.theme.authorinfo;
  return (
    <AuthorInfotable className="author-wrapper">
      <li>
        <p>Age:</p>
        <span>{Author.age}</span>
      </li>
      <li>
        <p>Residence:</p>
        <span>{Author.residence}</span>
      </li>
    </AuthorInfotable>
  );
};

export default connect(AuthorInfo);

const AuthorInfotable = styled.ul`
  padding: 15px 0 15px 0;
  & li {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  }
  & span {
    font-size: 12px;
  }
  & li p {
    padding: 5px 8px;
    font-size: 12px;
  }
  & .green {
    color: #7eb942;
  }
`;
