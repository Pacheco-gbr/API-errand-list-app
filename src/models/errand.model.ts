import { randomUUID } from "crypto";

interface ErrandCreatedDTO {
  description: string;
  detail: string;
}

interface ErrandDTO {
  id: string;
  description: string;
  detail: string;
  filed: boolean;
}

export class Errand {
  private _id: string;
  _description: string;
  _detail: string;
  _filed: boolean;

  constructor(params: ErrandCreatedDTO) {
    this._id = randomUUID();
    this._description = params.description;
    this._detail = params.detail;
    this._filed = false;
  }

  get id() {
    return this._id;
  }
  get description() {
    return this._description;
  }
  get detail() {
    return this._detail;
  }
  get filed() {
    return this._filed;
  }

  handleProperties() {
    return {
      id: this._id,
      description: this._description,
      detail: this._detail,
      filed: this._filed,
    };
  }

  static createFromDataBaseErrand(params: ErrandDTO) {
    const errand = new Errand({
      description: params.description,
      detail: params.detail,
    })
    errand._id = params.id;
    errand._filed = params.filed;
    return errand;
  }
}
