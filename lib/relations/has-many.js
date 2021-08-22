"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasMany = void 0;

var _hasOneOrMany = require("./has-one-or-many");

class HasMany extends _hasOneOrMany.HasOneOrMany {
  async get() {
    try {
      this.queries.forEach(query => {
        switch (query.method) {
          case 'where':
            const {
              operator,
              value
            } = query;
            this.relation.where(query.key, operator, value);
            break;

          case 'whereIn':
            this.relation.whereIn(query.key, query.values);
            break;

          case 'limit':
            this.relation.limit(query.amount);
            break;
        }
      });
      const foreignKey = this.getForeignKey();
      const collection = await this.relation.where(foreignKey, '==', this.parent.get('id')).getAll();
      this.parent.set(this.name, collection);
      return collection;
    } catch (error) {
      throw error;
    } finally {
      this.clearQueries();
    }
  }

  async find(id) {
    try {
      this.queries.forEach(query => {
        switch (query.method) {
          case 'where':
            const {
              operator,
              value
            } = query;
            this.relation.where(query.key, operator, value);
            break;

          case 'whereIn':
            this.relation.whereIn(query.key, query.values);
            break;

          case 'limit':
            this.relation.limit(query.amount);
            break;
        }
      });
      const foreignKey = this.getForeignKey();
      const model = await this.relation.where(foreignKey, '==', this.parent.get('id')).findOne(id);
      return model;
    } catch (error) {
      throw error;
    } finally {
      this.clearQueries();
    }
  }

  async findOrFail(id) {
    const model = await this.find(id);

    if (!model) {
      throw new Error('Model does not exist.');
    }

    return model;
  }

  async count() {
    try {
      const collection = await this.get();
      return collection.length;
    } catch (error) {
      throw error;
    }
  }

}

exports.HasMany = HasMany;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW1hbnkudHMiXSwibmFtZXMiOlsiSGFzTWFueSIsIkhhc09uZU9yTWFueSIsImdldCIsInF1ZXJpZXMiLCJmb3JFYWNoIiwicXVlcnkiLCJtZXRob2QiLCJvcGVyYXRvciIsInZhbHVlIiwicmVsYXRpb24iLCJ3aGVyZSIsImtleSIsIndoZXJlSW4iLCJ2YWx1ZXMiLCJsaW1pdCIsImFtb3VudCIsImZvcmVpZ25LZXkiLCJnZXRGb3JlaWduS2V5IiwiY29sbGVjdGlvbiIsInBhcmVudCIsImdldEFsbCIsInNldCIsIm5hbWUiLCJlcnJvciIsImNsZWFyUXVlcmllcyIsImZpbmQiLCJpZCIsIm1vZGVsIiwiZmluZE9uZSIsImZpbmRPckZhaWwiLCJFcnJvciIsImNvdW50IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBRU8sTUFBTUEsT0FBTixTQUE0REMsMEJBQTVELENBQStFO0FBQzVFLFFBQUhDLEdBQUcsR0FBRztBQUNYLFFBQUk7QUFDSCxXQUFLQyxPQUFMLENBQWFDLE9BQWIsQ0FBc0JDLEtBQUQsSUFBVztBQUMvQixnQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MsZUFBSyxPQUFMO0FBQ0Msa0JBQU07QUFBRUMsY0FBQUEsUUFBRjtBQUFZQyxjQUFBQTtBQUFaLGdCQUFzQkgsS0FBNUI7QUFDQSxpQkFBS0ksUUFBTCxDQUFjQyxLQUFkLENBQW9CTCxLQUFLLENBQUNNLEdBQTFCLEVBQStCSixRQUEvQixFQUF5Q0MsS0FBekM7QUFDQTs7QUFDRCxlQUFLLFNBQUw7QUFDQyxpQkFBS0MsUUFBTCxDQUFjRyxPQUFkLENBQXNCUCxLQUFLLENBQUNNLEdBQTVCLEVBQWlDTixLQUFLLENBQUNRLE1BQXZDO0FBQ0E7O0FBQ0QsZUFBSyxPQUFMO0FBQ0MsaUJBQUtKLFFBQUwsQ0FBY0ssS0FBZCxDQUFvQlQsS0FBSyxDQUFDVSxNQUExQjtBQUNBO0FBVkY7QUFZQSxPQWJEO0FBY0EsWUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFDQSxZQUFNQyxVQUFVLEdBQUcsTUFBTSxLQUFLVCxRQUFMLENBQWNDLEtBQWQsQ0FBb0JNLFVBQXBCLEVBQWdDLElBQWhDLEVBQXNDLEtBQUtHLE1BQUwsQ0FBWWpCLEdBQVosQ0FBZ0IsSUFBaEIsQ0FBdEMsRUFBNkRrQixNQUE3RCxFQUF6QjtBQUVBLFdBQUtELE1BQUwsQ0FBWUUsR0FBWixDQUFnQixLQUFLQyxJQUFyQixFQUEyQkosVUFBM0I7QUFDQSxhQUFPQSxVQUFQO0FBQ0EsS0FwQkQsQ0FvQkUsT0FBT0ssS0FBUCxFQUFjO0FBQ2YsWUFBTUEsS0FBTjtBQUNBLEtBdEJELFNBc0JVO0FBQ1QsV0FBS0MsWUFBTDtBQUNBO0FBQ0Q7O0FBRVMsUUFBSkMsSUFBSSxDQUFDQyxFQUFELEVBQWdDO0FBQ3pDLFFBQUk7QUFDSCxXQUFLdkIsT0FBTCxDQUFhQyxPQUFiLENBQXNCQyxLQUFELElBQVc7QUFDL0IsZ0JBQVFBLEtBQUssQ0FBQ0MsTUFBZDtBQUNDLGVBQUssT0FBTDtBQUNDLGtCQUFNO0FBQUVDLGNBQUFBLFFBQUY7QUFBWUMsY0FBQUE7QUFBWixnQkFBc0JILEtBQTVCO0FBQ0EsaUJBQUtJLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkwsS0FBSyxDQUFDTSxHQUExQixFQUErQkosUUFBL0IsRUFBeUNDLEtBQXpDO0FBQ0E7O0FBQ0QsZUFBSyxTQUFMO0FBQ0MsaUJBQUtDLFFBQUwsQ0FBY0csT0FBZCxDQUFzQlAsS0FBSyxDQUFDTSxHQUE1QixFQUFpQ04sS0FBSyxDQUFDUSxNQUF2QztBQUNBOztBQUNELGVBQUssT0FBTDtBQUNDLGlCQUFLSixRQUFMLENBQWNLLEtBQWQsQ0FBb0JULEtBQUssQ0FBQ1UsTUFBMUI7QUFDQTtBQVZGO0FBWUEsT0FiRDtBQWNBLFlBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQ0EsWUFBTVUsS0FBSyxHQUFHLE1BQU0sS0FBS2xCLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQk0sVUFBcEIsRUFBZ0MsSUFBaEMsRUFBc0MsS0FBS0csTUFBTCxDQUFZakIsR0FBWixDQUFnQixJQUFoQixDQUF0QyxFQUE2RDBCLE9BQTdELENBQXFFRixFQUFyRSxDQUFwQjtBQUNBLGFBQU9DLEtBQVA7QUFDQSxLQWxCRCxDQWtCRSxPQUFPSixLQUFQLEVBQWM7QUFDZixZQUFNQSxLQUFOO0FBQ0EsS0FwQkQsU0FvQlU7QUFDVCxXQUFLQyxZQUFMO0FBQ0E7QUFDRDs7QUFFZSxRQUFWSyxVQUFVLENBQUNILEVBQUQsRUFBYTtBQUM1QixVQUFNQyxLQUFLLEdBQUcsTUFBTSxLQUFLRixJQUFMLENBQVVDLEVBQVYsQ0FBcEI7O0FBRUEsUUFBSSxDQUFDQyxLQUFMLEVBQVk7QUFDWCxZQUFNLElBQUlHLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ0E7O0FBRUQsV0FBT0gsS0FBUDtBQUNBOztBQUVVLFFBQUxJLEtBQUssR0FBRztBQUNiLFFBQUk7QUFDSCxZQUFNYixVQUFVLEdBQUcsTUFBTSxLQUFLaEIsR0FBTCxFQUF6QjtBQUNBLGFBQU9nQixVQUFVLENBQUNjLE1BQWxCO0FBQ0EsS0FIRCxDQUdFLE9BQU9ULEtBQVAsRUFBYztBQUNmLFlBQU1BLEtBQU47QUFDQTtBQUNEOztBQXhFb0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbERhdGEgfSBmcm9tICcuLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgeyBIYXNPbmVPck1hbnkgfSBmcm9tICcuL2hhcy1vbmUtb3ItbWFueSc7XG5cbmV4cG9ydCBjbGFzcyBIYXNNYW55PFQgZXh0ZW5kcyBNb2RlbCwgRCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBIYXNPbmVPck1hbnk8VCwgRD4ge1xuXHRhc3luYyBnZXQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgZm9yZWlnbktleSA9IHRoaXMuZ2V0Rm9yZWlnbktleSgpO1xuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMucmVsYXRpb24ud2hlcmUoZm9yZWlnbktleSwgJz09JywgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKS5nZXRBbGwoKTtcblxuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KHRoaXMubmFtZSwgY29sbGVjdGlvbik7XG5cdFx0XHRyZXR1cm4gY29sbGVjdGlvbjtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZmluZChpZDogc3RyaW5nKTogUHJvbWlzZTxUIHwgbnVsbD4ge1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZUluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ubGltaXQocXVlcnkuYW1vdW50KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGZvcmVpZ25LZXkgPSB0aGlzLmdldEZvcmVpZ25LZXkoKTtcblx0XHRcdGNvbnN0IG1vZGVsID0gYXdhaXQgdGhpcy5yZWxhdGlvbi53aGVyZShmb3JlaWduS2V5LCAnPT0nLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpLmZpbmRPbmUoaWQpO1xuXHRcdFx0cmV0dXJuIG1vZGVsO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBmaW5kT3JGYWlsKGlkOiBzdHJpbmcpIHtcblx0XHRjb25zdCBtb2RlbCA9IGF3YWl0IHRoaXMuZmluZChpZCk7XG5cblx0XHRpZiAoIW1vZGVsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01vZGVsIGRvZXMgbm90IGV4aXN0LicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtb2RlbDtcblx0fVxuXG5cdGFzeW5jIGNvdW50KCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgdGhpcy5nZXQoKTtcblx0XHRcdHJldHVybiBjb2xsZWN0aW9uLmxlbmd0aDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG59XG4iXX0=