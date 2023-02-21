export type InputListData<T> = {
  id: string;
  type: React.HTMLInputTypeAttribute;
  name: keyof T;
  label: string;
  placeholder?: string;
  required?: boolean;
};
