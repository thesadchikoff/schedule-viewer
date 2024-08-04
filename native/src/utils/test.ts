function getPropertyValue<Obj, Key extends keyof Obj>(
	obj: Obj,
	key: Key
): Obj[Key] {
	return obj[key]
}

const user = {
	id: 124,
	name: 'Ivan',
	job: 'Developer',
}

getPropertyValue(user, 'job')
