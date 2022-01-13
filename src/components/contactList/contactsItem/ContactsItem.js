import phoneBookContext from "../../../context/phoneBookContext";
import { Item, Button } from "./ContactItem.styled";

const ContacsItem = () => {
  return (
    <phoneBookContext.Consumer>
      {({ filter, contacts, onDeleteName }) => {
        const normalazedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalazedFilter)
        );
        return visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name} : {number}
            </p>
            <Button type="button" onClick={() => onDeleteName(id)}>
              Delete
            </Button>
          </Item>
        ));
      }}
    </phoneBookContext.Consumer>
  );
};

export default ContacsItem;
