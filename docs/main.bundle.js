webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/Shared/coracao.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coracao; });
var Coracao = (function () {
    function Coracao(cheio, urlCoracaoCheio, urlCoracaoVazio) {
        if (cheio === void 0) { cheio = true; }
        if (urlCoracaoCheio === void 0) { urlCoracaoCheio = "../../assets/coracao_cheio.png"; }
        if (urlCoracaoVazio === void 0) { urlCoracaoVazio = "../../assets/coracao_vazio.png"; }
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    Coracao.prototype.definirCoracao = function () {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    };
    return Coracao;
}());

//# sourceMappingURL=coracao.model.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n\n<div *ngIf=\"finalizandoAplicacao; else fimDeAplicacao\">\n    <app-painel (finalizandoJogo) = \"game($event)\"></app-painel>\n</div>\n\n<ng-template #fimDeAplicacao>\n    <div class=\"container\">\n        <div *ngIf=\"resultadoAplicacao === 'vitoria'\" style=\"margin-top:50px;\" class=\"row\">\n            <div class=\"alert alert-light\">\n                <h3 style=\"color: green;\">Parabéns! Continue buscando a evolução no inglês! </h3>\n            </div>\n     </div>\n        <div *ngIf=\"resultadoAplicacao === 'derrota'\" class=\"row\">\n            <div class=\"alert alert-light\">\n                <h3 style=\"color: red;\">Fim de jogo! Infelizmente, você perdeu! </h3>\n            </div>\n        </div>\n        <button class=\"btn btn-warning\" (click)=\"reiniciarAplicacao()\">Reiniciar Game</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.finalizandoAplicacao = true;
    }
    AppComponent.prototype.game = function (x) {
        this.finalizandoAplicacao = false;
        this.resultadoAplicacao = x;
    };
    AppComponent.prototype.reiniciarAplicacao = function () {
        this.finalizandoAplicacao = true;
        this.resultadoAplicacao = undefined;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__ = __webpack_require__("./src/app/topo/topo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__ = __webpack_require__("./src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__ = __webpack_require__("./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__ = __webpack_require__("./src/app/progresso/progresso.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__["a" /* TopoComponent */],
            __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__["a" /* PainelComponent */],
            __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__["a" /* TentativasComponent */],
            __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__["a" /* ProgressoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/painel/frases-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES; });
var FRASES = [
    { fraseEng: "Eu liked to Londres!", frasePTBR: "Eu gostei de Londres!" },
    { fraseEng: "How Are You?", frasePTBR: "Como você está?" },
    { fraseEng: "I am Ryan", frasePTBR: "Eu sou Ryan" },
    { fraseEng: "He not understand english", frasePTBR: "Ele não entende inglês" },
    { fraseEng: "Hi! My name is", frasePTBR: "Olá, meu nome é." },
    { fraseEng: "I am fine, and you? ", frasePTBR: "Eu estou bem, e você?" },
    { fraseEng: "Nice to meet you!", frasePTBR: "Prazer em te conhecer" },
    { fraseEng: "What time is it?", frasePTBR: "Que horas são?" }
];
//# sourceMappingURL=frases-mock.js.map

/***/ }),

/***/ "./src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mg-4 p-2\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <app-progresso [progressobyprogresso]='progresso'></app-progresso>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"d-flex justify-content-end p-2\">\n        <app-tentativas [tentativas]='tentativas'></app-tentativas>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"d-flex flex-column mb-3\">\n    <div class=\"p-2\">\n      <h6>{{instrucao}}</h6>\n      <p>{{rodadaFrase.fraseEng}}</p>\n      <div class=\"input-group input-group-lg\">\n        <input type=\"text\" class=\"form-control\" [value]=\"getResposta\" (input)=\"pegarResposta($event)\"\n          aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-lg\">\n      </div>\n      <div class=\"d-flex justify-content-end p-2\">\n        <button type=\"button\" (click)=\"resposta()\" class=\"btn btn-primary btn-sm\">Verificar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frases_mock__ = __webpack_require__("./src/app/painel/frases-mock.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainelComponent = (function () {
    function PainelComponent() {
        this.frases = __WEBPACK_IMPORTED_MODULE_1__frases_mock__["a" /* FRASES */];
        this.instrucao = "Traduza a Frase:";
        this.random = 0;
        this.randomFeitos = [];
        this.acertos = 0;
        //-------------------------------------------
        this.progresso = 0;
        // --------------------------
        this.tentativas = 3;
        this.finalizandoJogo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.reiniciarRodada();
    }
    PainelComponent.prototype.pegarResposta = function (x) {
        this.getResposta = x.target.value;
    };
    PainelComponent.prototype.resposta = function () {
        if (this.getResposta == this.rodadaFrase.frasePTBR) {
            this.acertos++;
            if (this.acertos == 4) {
                this.finalizandoJogo.emit('vitoria');
            }
            this.reiniciarRodada();
            this.progresso += (100 / this.frases.length);
        }
        else {
            this.tentativas--;
            if (this.tentativas === -1) {
                this.finalizandoJogo.emit('derrota');
            }
        }
    };
    PainelComponent.prototype.reiniciarRodada = function () {
        this.random = Math.floor(this.frases.length * Math.random());
        this.verificarRepeticao();
        this.rodadaFrase = this.frases[this.random];
        this.getResposta = '';
    };
    PainelComponent.prototype.verificarRepeticao = function () {
        for (var _i = 0, _a = this.randomFeitos; _i < _a.length; _i++) {
            var random = _a[_i];
            if (random == this.random) {
                this.random = Math.floor(this.frases.length * Math.random());
                break;
            }
        }
        this.randomFeitos.push(this.random);
    };
    return PainelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], PainelComponent.prototype, "finalizandoJogo", void 0);
PainelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-painel',
        template: __webpack_require__("./src/app/painel/painel.component.html")
    }),
    __metadata("design:paramtypes", [])
], PainelComponent);

var _a;
//# sourceMappingURL=painel.component.js.map

/***/ }),

/***/ "./src/app/progresso/progresso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress m-4\">\n  <div class=\"progress-bar w-{{progresso}}\" style=\" border: 2px solid aqua;\"></div>\n</div>"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = (function () {
    function ProgressoComponent() {
        this.progresso = 0;
    }
    return ProgressoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])("progressobyprogresso"),
    __metadata("design:type", Number)
], ProgressoComponent.prototype, "progresso", void 0);
ProgressoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-progresso',
        template: __webpack_require__("./src/app/progresso/progresso.component.html")
    })
], ProgressoComponent);

//# sourceMappingURL=progresso.component.js.map

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.definirCoracao()\"/>\n   \n\n"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Shared_coracao_model__ = __webpack_require__("./src/app/Shared/coracao.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = (function () {
    function TentativasComponent() {
        this.coracoes = [
            new __WEBPACK_IMPORTED_MODULE_1_app_Shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1_app_Shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1_app_Shared_coracao_model__["a" /* Coracao */](true)
        ];
        this.tentativas = 3;
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        if (this.tentativas !== this.coracoes.length) {
            var indice = this.coracoes.length - this.tentativas - 1;
            this.coracoes[indice].cheio = false;
        }
    };
    return TentativasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], TentativasComponent.prototype, "tentativas", void 0);
TentativasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tentativas',
        template: __webpack_require__("./src/app/tentativas/tentativas.component.html")
    })
], TentativasComponent);

//# sourceMappingURL=tentativas.component.js.map

/***/ }),

/***/ "./src/app/topo/topo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- As a link -->\n<nav class=\"navbar  bg-primary\" style=\"background-color: #e3f2fd;\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand text-white\" href=\"#\">{{logo_title}}</a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopoComponent = (function () {
    function TopoComponent() {
        this.logo_title = "Aprendendo Inglês";
    }
    return TopoComponent;
}());
TopoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-topo',
        template: __webpack_require__("./src/app/topo/topo.component.html")
    })
], TopoComponent);

//# sourceMappingURL=topo.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map