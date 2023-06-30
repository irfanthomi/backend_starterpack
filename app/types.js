/* eslint-disable no-undef */
/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} role
 * @property {string} org
 *
 * @typedef {e.Request} Request
 *
 * @typedef {Object} AuthReq
 * @property {User} user
 * 
 * @typedef {Request & AuthReq} AuthRequest 
 */

module.exports = {
    User,
    AuthRequest
};