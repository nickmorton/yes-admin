"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('../../lib/index');
var mongodb_1 = require('mongodb');
;
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository(config, validator) {
        _super.call(this, config, 'users', validator);
    }
    ;
    // // db.users.insert({ forename: 'Nick', surname: 'Morton', dob: new Date(1959, 9, 20) })
    // // db.users.insert({ forename: 'Liz', surname: 'Morton', dob: new Date(1969, 5, 24) })
    // // db.users.insert({ forename: 'Nathan', surname: 'Morton', dob: new Date(2005, 6, 15) })
    UserRepository.prototype.getById = function (id) {
        return this.dbExecute(function (collection, subject) {
            collection.find({ _id: new mongodb_1.ObjectID(id) }).limit(1).next(function (err, user) {
                if (err) {
                    throw new Error(err.message);
                }
                subject.next(user);
                subject.complete();
            });
        });
    };
    ;
    UserRepository.prototype.get = function (criteria) {
        return this.dbExecute(function (collection, subject) {
            collection
                .find({}, null, criteria.skip, criteria.limit)
                .toArray(function (err, users) {
                if (err) {
                    throw new Error(err.message);
                }
                subject.next(users);
                subject.complete();
            });
        });
    };
    ;
    return UserRepository;
}(index_1.RepositoryBase));
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map