import phoneBookContext from "../../../context/phoneBookContext";

const ContacsItem = () => {
  return (
    <phoneBookContext.Consumer>
      {(data) => {
        const normalazedFilter = data.filter.toLowerCase();
        const visibleContacts = data.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalazedFilter)
        );

        return visibleContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
          </li>
        ));
      }}
    </phoneBookContext.Consumer>
  );
};

export default ContacsItem;
