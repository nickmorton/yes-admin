"use strict";
var rx_1 = require('rxjs/rx');
var mongodb_1 = require('mongodb');
;
;
var RepositoryBase = (function () {
    function RepositoryBase(config, collectionName, validator) {
        this.config = config;
        this.collectionName = collectionName;
        this.validator = validator;
    }
    ;
    RepositoryBase.prototype.add = function (entity) {
        if (this.validator.validate(entity)) {
            return this.dbExecute(function (collection, subject) {
                collection.insertOne(entity, function (err, result) {
                    if (err) {
                        throw new Error(err.errmsg);
                    }
                    entity._id = result.insertedId.toHexString();
                    subject.next(entity);
                    subject.complete();
                });
            });
        }
        throw new Error('Validation failed');
    };
    ;
    RepositoryBase.prototype.update = function (entity) {
        if (this.validator.validate(entity)) {
            return this.dbExecute(function (collection, subject) {
                var id = new mongodb_1.ObjectID(entity._id);
                delete entity._id;
                collection.replaceOne({ _id: id }, entity, function (err, result) {
                    if (err) {
                        throw new Error(err.errmsg);
                    }
                    console.log(result.toString());
                    entity._id = id.toHexString();
                    subject.next(entity);
                    subject.complete();
                });
            });
        }
        throw new Error('Validation failed');
    };
    ;
    RepositoryBase.prototype.dbExecute = function (callback) {
        var _this = this;
        var subject = new rx_1.Subject();
        mongodb_1.MongoClient.connect(this.config.dbUrl, function (err, db) {
            callback(db.collection(_this.collectionName), subject);
        });
        return subject;
    };
    ;
    return RepositoryBase;
}());
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=repository.js.map