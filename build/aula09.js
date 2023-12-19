"use strict";
var diasSema;
(function (diasSema) {
    diasSema[diasSema["domigo"] = 0] = "domigo";
    diasSema[diasSema["segunda"] = 1] = "segunda";
    diasSema[diasSema["terca"] = 2] = "terca";
    diasSema[diasSema["quarta"] = 3] = "quarta";
    diasSema[diasSema["quinta"] = 4] = "quinta";
    diasSema[diasSema["sexta"] = 5] = "sexta";
    diasSema[diasSema["sabado"] = 6] = "sabado";
})(diasSema || (diasSema = {}));
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
var TipoUser;
(function (TipoUser) {
    TipoUser[TipoUser["admin"] = 10] = "admin";
    TipoUser[TipoUser["user"] = 200] = "user";
    TipoUser[TipoUser["super"] = 3000] = "super";
})(TipoUser || (TipoUser = {}));
let p = 200;
