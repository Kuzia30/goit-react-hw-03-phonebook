import phoneBookContext from "../../../context/phoneBookContext";

const ContacsItem = () => {
  return (
    <phoneBookContext.Consumer>
      {({ filter, contacts, onDeleteName }) => {
        const normalazedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalazedFilter)
        );
        return visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button type="button" onClick={() => onDeleteName(id)}>
              Delete
            </button>
          </li>
        ));
      }}
    </phoneBookContext.Consumer>
  );
};

export default ContacsItem;
