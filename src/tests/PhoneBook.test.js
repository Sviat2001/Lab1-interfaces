import { shallowMount } from '@vue/test-utils';
import PhoneBook from '../../src/components/PhoneBook.vue';

describe('PhoneBook.vue', () => {
  it('renders contacts correctly', () => {
    const phonebooks = [{ name: 'John Doe', phones: '1234567890' }];
    const wrapper = shallowMount(PhoneBook, {
      propsData: { phonebooks, addContact: jest.fn(), deleteContact: jest.fn() }
    });
    expect(wrapper.find('p').text()).toContain('John Doe');
  });

  it('calls addContact with correct data when button is clicked', async () => {
    const addContact = jest.fn();
    const wrapper = shallowMount(PhoneBook, {
      propsData: { phonebooks: [], addContact, deleteContact: jest.fn() }
    });
    await wrapper.setData({ name: 'Jane Doe', phones: '0987654321' });
    await wrapper.find('button.btn-dark').trigger('click');
    expect(addContact).toHaveBeenCalledWith('Jane Doe', '0987654321');
  });

  it('calls deleteContact with correct index when button is clicked', async () => {
    const deleteContact = jest.fn();
    const phonebooks = [{ name: 'John Doe', phones: '1234567890' }];
    const wrapper = shallowMount(PhoneBook, {
      propsData: { phonebooks, addContact: jest.fn(), deleteContact }
    });
    await wrapper.find('button.btn-delete').trigger('click');
    expect(deleteContact).toHaveBeenCalledWith(0);
  });
});
