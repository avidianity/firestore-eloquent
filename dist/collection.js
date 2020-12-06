export class Collection extends Array {
	load(relations) {
		return new Promise((resolve, reject) => {
			const operations = [];
			this.forEach(() => operations.push(false));
			this.forEach(async (item, index) => {
				try {
					this.splice(index, 1, await item.load(relations));
					operations.splice(index, 1, true);
					let allTrue = true;
					operations.forEach((operation) => {
						if (!operation) {
							allTrue = false;
						}
					});
					if (allTrue) {
						resolve(this);
					}
				} catch (error) {
					return reject(error);
				}
			});
		});
	}
	save() {
		return Promise.all(this.map((item) => item.save()));
	}
	delete() {
		return Promise.all(this.map((item) => item.delete()));
	}
}
