import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Vuex from 'vuex';
import App from '../../src/App.vue';
import NavBar from '../../src/components/NavBar.vue';
import AboutUs from '../../src/components/AboutUs.vue';
import LoginUser from '../../src/components/LoginUser.vue';
import RegisterUser from '../../src/components/RegisterUser.vue';
import ProfileUser from '../../src/components/ProfileUser.vue';
import PhoneBook from '../../src/components/PhoneBook.vue';



describe('App.vue', () => {

  it('renders NavBar component', () => {
    const wrapper = shallowMount(App, {
        computed: {
            currentPage() {
              return 0
            },
            currentLoggedUser() {
                return {
                    index: -1,
                    phonebook: []
                }
            }
        }
    });
    expect(wrapper.findComponent(NavBar).exists()).toBe(true);
  });

  it('renders PhoneBook component when currentPage is 0', () => {
    const wrapper = shallowMount(App, {
        computed: {
            currentPage() {
              return 0
            },
            currentLoggedUser() {
                return {
                    index: -1,
                    phonebook: []
                }
            }
        }
    });
    expect(wrapper.findComponent(PhoneBook).exists()).toBe(true);
  });

  it('renders AboutUs component when currentPage is 1', () => {
    const wrapper = shallowMount(App, {
        computed: {
            currentPage() {
              return 1
            },
            currentLoggedUser() {
                return {
                    index: -1,
                    phonebook: []
                }
            }
        }
    });
    expect(wrapper.findComponent(AboutUs).exists()).toBe(true);
  });

  it('renders RegisterUser component when currentPage is 2', () => {
    const wrapper = shallowMount(App, {
        computed: {
            currentPage() {
              return 2
            },
            currentLoggedUser() {
                return {
                    index: -1,
                    phonebook: []
                }
            }
        }
    });
    expect(wrapper.findComponent(RegisterUser).exists()).toBe(true);
  });

  it('renders LoginUser component when currentPage is 3', () => {
    const wrapper = shallowMount(App, {
        computed: {
            currentPage() {
              return 3
            },
            currentLoggedUser() {
                return {
                    index: -1,
                    phonebook: []
                }
            }
        }
    });
    expect(wrapper.findComponent(LoginUser).exists()).toBe(true);
  });

  it('renders ProfileUser component when currentPage is 4 and user is logged in', () => {
    const wrapper = shallowMount(App, {
        computed: {
            currentPage() {
              return 4
            },
            currentLoggedUser() {
                return {
                    index: 0,
                    phonebook: []
                }
            },
            users() {
                return [ {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    gender: 'Male',
                    birthdate: '2000-01-01'
                  }];
            }
        }
    });
    expect(wrapper.findComponent(ProfileUser).exists()).toBe(true);
  });

  it('displays message when currentPage is 4 and user is not logged in', () => {
    const wrapper = shallowMount(App, {
        computed: {
            currentPage() {
              return 4
            },
            currentLoggedUser() {
                return {
                    index: -1,
                    phonebook: []
                }
            }
        }
    });
    expect(wrapper.find('h1.display-3').text()).toBe('You are not logged ! Please log in !');
  });
});
