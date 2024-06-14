import { shallowMount } from '@vue/test-utils';
import AboutUs from '../../src/components/AboutUs.vue';

describe('AboutUs.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(AboutUs);
    expect(wrapper.find('h1').text()).toBe('About Us');
    expect(wrapper.find('p').text()).toBe('This is a simple phone book application built with Vue.js.');
  });
});
