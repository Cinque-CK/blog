const Sequelize = require('sequelize');
const uuidV4 = require('uuid/v4');

const sequelizeUtil = require('./sequelizeUtil');

const defineModel = function(name, attributes) {
    let attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    attrs.id = {
        type: Sequelize.STRING(50),
        primaryKey: true
    };
    attrs.createdAt = {
        type: Sequelize.BIGINT,
        field: 'created_at',
        allowNull: false
    };
    attrs.updatedAt = {
        type: Sequelize.BIGINT,
        field: 'updated_at',
        allowNull: false
    };
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.status = {
        type: Sequelize.INTEGER,
        allowNull: false
    };
    return sequelizeUtil.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function(obj) {
                let now = Date.now();
                if (obj.isNewRecord) {
                    if (!obj.id) {
                        obj.id = uuidV4();
                    }
                    obj.createdAt = now;
                    obj.updatedAt = now;
                    obj.version = 0;
                    obj.status = 1;
                } else {
                    obj.updatedAt = Date.now();
                    obj.version++;
                }
            }
        }
    });
};

const modelUtil = {
    defineModel,
    sync: () => {
        // only allow create ddl in non-production environment:
        if (process.env.NODE_ENV !== 'production') {
            sequelizeUtil.sync({ force: true });
        } else {
            throw new Error("Cannot sync() when NODE_ENV is set to 'production'.");
        }
    }
};

module.exports = modelUtil;
