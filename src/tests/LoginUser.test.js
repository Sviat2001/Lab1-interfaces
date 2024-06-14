import { shallowMount } from '@vue/test-utils';
import LoginUser from '../../src/components/LoginUser.vue';

describe('LoginUser.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(LoginUser, {
      propsData: {
        loginUser: jest.fn()
      }
    });
    expect(wrapper.find('h1').text()).toBe('Login');
  });

  it('calls loginUser with correct data when button is clicked', async () => {
    const loginUser = jest.fn();
    const wrapper = shallowMount(LoginUser, {
      propsData: {
        loginUser
      }
    });
    await wrapper.setData({ email: 'test@example.com', password: 'password' });
    await wrapper.find('button').trigger('click');
    expect(loginUser).toHaveBeenCalledWith('test@example.com', 'password');
  });
});
