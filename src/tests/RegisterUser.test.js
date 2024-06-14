import { shallowMount } from '@vue/test-utils';
import RegisterUser from '../../src/components/RegisterUser.vue';

describe('RegisterUser.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(RegisterUser, {
      propsData: {
        registerUser: jest.fn()
      }
    });
    expect(wrapper.find('h1').text()).toBe('Registration');
  });

  it('calls registerUser with correct data when button is clicked', async () => {
    const registerUser = jest.fn();
    const wrapper = shallowMount(RegisterUser, {
      propsData: {
        registerUser
      }
    });
    await wrapper.setData({ name: 'Jane Doe', email: 'jane@example.com', gender: 'Female', birthdate: '2000-01-01', password: 'password' });
    await wrapper.find('button').trigger('click');
    expect(registerUser).toHaveBeenCalledWith('Jane Doe', 'jane@example.com', 'Female', '2000-01-01', 'password');
  });
});
