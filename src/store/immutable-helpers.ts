import { fromJS } from 'immutable'

export interface TypedMap<DataType> {
  get<Key extends keyof DataType>(key: Key, notSetValue?: DataType[Key]): DataType[Key]
  set<Value>(value: Value): TypedMap<DataType & Value>
}

export function typedMap<DataType extends object> (obj: DataType) {
  return fromJS(obj) as TypedMap<DataType>
}
