import { PageSetting } from 'user';
import create from 'zustand';
import _create from 'zustand/vanilla';

interface PageState extends PageSetting {
  refeatcher: Function | null;
}

export const _pageStore = _create<PageState>()((set, get) => ({
  email: '',
  image_limit: 20,
  video_limit: 5,
  phone: '',
  local_phone: '',
  first_name: '',
  last_name: '',
  bank_detail: {},
  refeatcher: null,
  update: (data: PageSetting, refeatcher: Function) =>
    set({ ...data, refeatcher }),
  refeatch: () => get().refeatcher?.(),
}));

export const pageStore = create(_pageStore);

export default pageStore;
