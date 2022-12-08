import { Language, User } from 'user';
import create from 'zustand';
import _create from 'zustand/vanilla';

interface UserState {
  user: User | null;
  lang: Language;
  setLang: Function;
  refeatcher: Function | null;
}

export const _userStore = _create<UserState>()((set, get) => ({
  user: null,
  lang: 'ES',
  setLang: (lang: Language) => {
    // change server lang
    set({ lang });
  },
  refeatcher: null,
  update: (user: User, refeatcher: Function) =>
    set({ user, refeatcher, lang: user.language }),
  refeatch: () => get().refeatcher?.(),
}));

export const userStore = create(_userStore);

export default userStore;
