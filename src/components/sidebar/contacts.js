import React from "react";
import { getContactHref, getIcon } from "../../utils";
import Icon from "../icon";

const Contacts = ({ contacts }) => (
  <div className="">
    <ul className="flex flex-row">
      {Object.keys(contacts).map((name) =>
        !contacts[name] ? null : (
          <li
            className="flex items-center justify-center content-center text-center m-4 p-0 leading-8 border border-gray-100 rounded-full w-8 h-8"
            key={name}
          >
            <a
              className="flex border-0 text-gray-700 hover:text-gray-400"
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name={name} icon={getIcon(name)} />
            </a>
          </li>
        )
      )}
    </ul>
  </div>
);

export default Contacts;
