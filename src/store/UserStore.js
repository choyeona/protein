import { observable, action } from "mobx";
import { makeAutoObservable } from "mobx";

export default class UserStore {
  secondsPassed = 0;

  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}
