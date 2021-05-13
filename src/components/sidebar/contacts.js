import React from "react";
import { getContactHref, getIcon } from "../../utils";
import Icon from "../icon";

const Contacts = ({ contacts }) => (
  <div>
    <ul className="flex flex-row space-x-6">
      {Object.keys(contacts).map((name) =>
        !contacts[name] ? null : (
          <li
            className="flex items-center justify-center content-center text-center p-0 leading-8 border text-gray-700 hover:text-blue-500 border-gray-100 hover:border-blue-500 rounded-full w-8 h-8"
            key={name}
          >
            <a
              className="flex border-0 "
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
