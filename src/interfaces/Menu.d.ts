interface Menu {
  id: string;
  to: string;
  name: string;
  midName?: string;
  children?: Menu[];
}
