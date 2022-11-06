export const getFirstRequestUrl = (page: string | null, gender: string | null, name: string | null): string => {
	if (page && gender) {
		return `${process.env.REACT_APP_API_URL}/?page=${page}&gender=${gender}`;
	}

	if (page && name) {
		return `${process.env.REACT_APP_API_URL}/?page=${page}&name=${name}`;
	}

	if (page) {
		return `${process.env.REACT_APP_API_URL}/?page=${page}`;
	}

	if (gender) {
		return `${process.env.REACT_APP_API_URL}/?gender=${gender}`;
	}

	if (name) {
		return `${process.env.REACT_APP_API_URL}/?name=${name}`;
	}

	return `${process.env.REACT_APP_API_URL}`;
};
