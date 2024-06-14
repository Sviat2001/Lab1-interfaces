import { shallowMount } from '@vue/test-utils';
import ProfileUser from '../../src/components/ProfileUser.vue';

describe('ProfileUser.vue', () => {
  it('renders user data correctly', () => {
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      birthdate: '2000-01-01'
    };
    const wrapper = shallowMount(ProfileUser, {
      propsData: { user, logoutUser: jest.fn() }
    });
    expect(wrapper.find('.lead').text()).toContain('John Doe');
  });

  it('calls logoutUser when button is clicked', async () => {
    const logoutUser = jest.fn();
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      birthdate: '2000-01-01'
    };
    const wrapper = shallowMount(ProfileUser, {
      propsData: { user, logoutUser }
    });
    await wrapper.find('button').trigger('click');
    expect(logoutUser).toHaveBeenCalled();
  });
});
