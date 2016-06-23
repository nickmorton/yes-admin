"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var repository_1 = require('../../lib/repository');
var mongodb_1 = require('mongodb');
;
var ClientRepository = (function (_super) {
    __extends(ClientRepository, _super);
    function ClientRepository(config, validator) {
        _super.call(this, config, 'clients', validator);
    }
    ;
    // // db.clients.insert({ forename: 'Nick', surname: 'Morton', dob: new Date(1959, 9, 20) })
    // // db.clients.insert({ forename: 'Liz', surname: 'Morton', dob: new Date(1969, 5, 24) })
    // // db.clients.insert({ forename: 'Nathan', surname: 'Morton', dob: new Date(2005, 6, 15) })
    ClientRepository.prototype.getById = function (id) {
        return this.dbExecute(function (collection, subject) {
            collection.find({ _id: new mongodb_1.ObjectID(id) }).limit(1).next(function (err, client) {
                if (err) {
                    throw new Error(err.message);
                }
                subject.next(client);
                subject.complete();
            });
        });
    };
    ;
    ClientRepository.prototype.getAll = function () {
        return this.dbExecute(function (collection, subject) {
            collection.find().toArray(function (err, clients) {
                if (err) {
                    throw new Error(err.message);
                }
                subject.next(clients);
                subject.complete();
            });
        });
    };
    ;
    return ClientRepository;
}(repository_1.RepositoryBase));
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=client.repository.js.map