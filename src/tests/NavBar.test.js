import { shallowMount } from '@vue/test-utils';
import NavBar from '../../src/components/NavBar.vue';

describe('NavBar.vue', () => {
  it('renders correctly', () => {
    const changePage = jest.fn();
    const wrapper = shallowMount(NavBar, {
      propsData: { changePage }
    });
    expect(wrapper.find('.navbar-brand').text()).toContain('Phonebook');
  });

  it('calls changePage with correct argument when button is clicked', async () => {
    const changePage = jest.fn();
    const wrapper = shallowMount(NavBar, {
      propsData: { changePage }
    });
    const buttons = wrapper.findAll('button.nav-link');
    await buttons.at(0).trigger('click');
    expect(changePage).toHaveBeenCalledWith(0);
    await buttons.at(1).trigger('click');
    expect(changePage).toHaveBeenCalledWith(1);
  });
});
