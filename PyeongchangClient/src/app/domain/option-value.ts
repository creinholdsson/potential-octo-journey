export class OptionValue<T> {
  label: T;
  value: number;

  constructor(value: number, label: T) {
    this.value = value;
    this.label = label;
  }
}
