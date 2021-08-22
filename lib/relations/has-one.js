"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasOne = void 0;

var _hasOneOrMany = require("./has-one-or-many");

class HasOne extends _hasOneOrMany.HasOneOrMany {
  constructor(relation, parent, name) {
    super(relation, parent);
    this.name = name || parent.getTableName();
  }

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
      const child = await this.relation.where(this.getForeignKey(), '==', this.parent.get('id')).first();
      this.parent.set(this.name, child);
      return child;
    } catch (error) {
      throw error;
    } finally {
      this.clearQueries();
    }
  }

}

exports.HasOne = HasOne;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS50cyJdLCJuYW1lcyI6WyJIYXNPbmUiLCJIYXNPbmVPck1hbnkiLCJjb25zdHJ1Y3RvciIsInJlbGF0aW9uIiwicGFyZW50IiwibmFtZSIsImdldFRhYmxlTmFtZSIsImdldCIsInF1ZXJpZXMiLCJmb3JFYWNoIiwicXVlcnkiLCJtZXRob2QiLCJvcGVyYXRvciIsInZhbHVlIiwid2hlcmUiLCJrZXkiLCJ3aGVyZUluIiwidmFsdWVzIiwibGltaXQiLCJhbW91bnQiLCJjaGlsZCIsImdldEZvcmVpZ25LZXkiLCJmaXJzdCIsInNldCIsImVycm9yIiwiY2xlYXJRdWVyaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBRU8sTUFBTUEsTUFBTixTQUEyREMsMEJBQTNELENBQThFO0FBQ3BGQyxFQUFBQSxXQUFXLENBQUNDLFFBQUQsRUFBY0MsTUFBZCxFQUE2QkMsSUFBN0IsRUFBNEM7QUFDdEQsVUFBTUYsUUFBTixFQUFnQkMsTUFBaEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQUksSUFBSUQsTUFBTSxDQUFDRSxZQUFQLEVBQXBCO0FBQ0E7O0FBRVEsUUFBSEMsR0FBRyxHQUFHO0FBQ1gsUUFBSTtBQUNILFdBQUtDLE9BQUwsQ0FBYUMsT0FBYixDQUFzQkMsS0FBRCxJQUFXO0FBQy9CLGdCQUFRQSxLQUFLLENBQUNDLE1BQWQ7QUFDQyxlQUFLLE9BQUw7QUFDQyxrQkFBTTtBQUFFQyxjQUFBQSxRQUFGO0FBQVlDLGNBQUFBO0FBQVosZ0JBQXNCSCxLQUE1QjtBQUNBLGlCQUFLUCxRQUFMLENBQWNXLEtBQWQsQ0FBb0JKLEtBQUssQ0FBQ0ssR0FBMUIsRUFBK0JILFFBQS9CLEVBQXlDQyxLQUF6QztBQUNBOztBQUNELGVBQUssU0FBTDtBQUNDLGlCQUFLVixRQUFMLENBQWNhLE9BQWQsQ0FBc0JOLEtBQUssQ0FBQ0ssR0FBNUIsRUFBaUNMLEtBQUssQ0FBQ08sTUFBdkM7QUFDQTs7QUFDRCxlQUFLLE9BQUw7QUFDQyxpQkFBS2QsUUFBTCxDQUFjZSxLQUFkLENBQW9CUixLQUFLLENBQUNTLE1BQTFCO0FBQ0E7QUFWRjtBQVlBLE9BYkQ7QUFlQSxZQUFNQyxLQUFLLEdBQUcsTUFBTSxLQUFLakIsUUFBTCxDQUFjVyxLQUFkLENBQW9CLEtBQUtPLGFBQUwsRUFBcEIsRUFBMEMsSUFBMUMsRUFBZ0QsS0FBS2pCLE1BQUwsQ0FBWUcsR0FBWixDQUFnQixJQUFoQixDQUFoRCxFQUF1RWUsS0FBdkUsRUFBcEI7QUFFQSxXQUFLbEIsTUFBTCxDQUFZbUIsR0FBWixDQUFnQixLQUFLbEIsSUFBckIsRUFBMkJlLEtBQTNCO0FBQ0EsYUFBT0EsS0FBUDtBQUNBLEtBcEJELENBb0JFLE9BQU9JLEtBQVAsRUFBYztBQUNmLFlBQU1BLEtBQU47QUFDQSxLQXRCRCxTQXNCVTtBQUNULFdBQUtDLFlBQUw7QUFDQTtBQUNEOztBQWhDbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbERhdGEgfSBmcm9tICcuLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgeyBIYXNPbmVPck1hbnkgfSBmcm9tICcuL2hhcy1vbmUtb3ItbWFueSc7XG5cbmV4cG9ydCBjbGFzcyBIYXNPbmU8VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIEhhc09uZU9yTWFueTxULCBEPiB7XG5cdGNvbnN0cnVjdG9yKHJlbGF0aW9uOiBULCBwYXJlbnQ6IE1vZGVsLCBuYW1lPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIocmVsYXRpb24sIHBhcmVudCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBwYXJlbnQuZ2V0VGFibGVOYW1lKCk7XG5cdH1cblxuXHRhc3luYyBnZXQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBjaGlsZCA9IGF3YWl0IHRoaXMucmVsYXRpb24ud2hlcmUodGhpcy5nZXRGb3JlaWduS2V5KCksICc9PScsIHRoaXMucGFyZW50LmdldCgnaWQnKSkuZmlyc3QoKTtcblxuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KHRoaXMubmFtZSwgY2hpbGQpO1xuXHRcdFx0cmV0dXJuIGNoaWxkO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==