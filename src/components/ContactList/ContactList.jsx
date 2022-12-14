import { ContactListItem } from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'Redux/Contacts/contacts-operations';
import { deleteContacts } from 'Redux/Contacts/contacts-operations';

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const handlerDelete = id => {
        dispatch(deleteContacts(id));
    };

    const getContactList = () => {
        return contacts.filter(user =>
          user.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    return (
        <ul className={styles.list}>
          {getContactList()?.map(({ id, name, phone }) => (
            <ContactListItem
              key={id}
              name={name}
              number={phone}
              onDelete={handlerDelete}
              id={id}
            />
          ))}
        </ul>
      );
};
