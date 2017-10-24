"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/throttleTime");
require("rxjs/add/operator/distinctUntilChanged");
var Subject_1 = require("rxjs/Subject");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var perfect_scrollbar_directive_1 = require("./perfect-scrollbar.directive");
var PerfectScrollbarComponent = /** @class */ (function () {
    function PerfectScrollbarComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.states = {};
        this.notify = null;
        this.userInteraction = false;
        this.allowPropagation = false;
        this.cancelEvent = null;
        this.timeoutState = null;
        this.timeoutScroll = null;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.statesSub = null;
        this.statesUpdate = new Subject_1.Subject();
        this.activeSub = null;
        this.activeUpdate = new Subject_1.Subject();
        this.fxShow = true;
        this.fxHide = false;
        this.hidden = false;
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.runInsideAngular = false;
    }
    PerfectScrollbarComponent.prototype.onGeneratedEvent = function (event) {
        // Stop the generated event from reaching window for PS to work correctly
        if (event['psGenerated']) {
            event.stopPropagation();
        }
    };
    PerfectScrollbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeSub = this.activeUpdate
            .distinctUntilChanged()
            .subscribe(function (active) {
            _this.allowPropagation = active;
        });
        this.statesSub = this.statesUpdate
            .distinctUntilChanged()
            .subscribe(function (state) {
            window.clearTimeout(_this.timeoutState);
            if (state !== 'x' && state !== 'y') {
                _this.notify = true;
                _this.states[state] = true;
                _this.timeoutState = window.setTimeout(function () {
                    _this.notify = false;
                    if (_this.autoPropagation && _this.userInteraction &&
                        ((!_this.usePropagationX && (_this.states.left || _this.states.right)) ||
                            (!_this.usePropagationY && (_this.states.top || _this.states.bottom)))) {
                        _this.allowPropagation = true;
                    }
                    _this.cdRef.markForCheck();
                }, 300);
            }
            else {
                _this.notify = false;
                if (state === 'x') {
                    _this.states.left = false;
                    _this.states.right = false;
                }
                else if (state === 'y') {
                    _this.states.top = false;
                    _this.states.bottom = false;
                }
                _this.userInteraction = true;
                if (_this.autoPropagation &&
                    (!_this.usePropagationX || !_this.usePropagationY)) {
                    _this.allowPropagation = false;
                    if (_this.cancelEvent) {
                        _this.elementRef.nativeElement.dispatchEvent(_this.cancelEvent);
                        _this.cancelEvent = null;
                    }
                }
                else if (_this.scrollIndicators) {
                    _this.notify = true;
                    _this.timeoutState = window.setTimeout(function () {
                        _this.notify = false;
                        _this.cdRef.markForCheck();
                    }, 300);
                }
            }
            _this.cdRef.markForCheck();
        });
    };
    PerfectScrollbarComponent.prototype.ngOnDestroy = function () {
        if (this.activeSub) {
            this.activeSub.unsubscribe();
        }
        if (this.statesSub) {
            this.statesSub.unsubscribe();
        }
        window.clearTimeout(this.timeoutState);
        window.clearTimeout(this.timeoutScroll);
    };
    PerfectScrollbarComponent.prototype.ngDoCheck = function () {
        if (!this.disabled && this.autoPropagation && this.directiveRef) {
            var element = this.directiveRef.elementRef.nativeElement;
            this.usePropagationX = !element.classList.contains('ps--active-x');
            this.usePropagationY = !element.classList.contains('ps--active-y');
            this.activeUpdate.next(this.usePropagationX && this.usePropagationY);
        }
    };
    PerfectScrollbarComponent.prototype.getConfig = function () {
        var config = this.config || {};
        if (this.autoPropagation) {
            config.swipePropagation = true;
            config.wheelPropagation = true;
        }
        return config;
    };
    PerfectScrollbarComponent.prototype.update = function () {
        console.warn('Deprecated function, update needs to be called through directiveRef!');
        this.directiveRef.update();
    };
    PerfectScrollbarComponent.prototype.scrollTo = function (x, y) {
        console.warn('Deprecated function, scrollTo needs to be called through directiveRef!');
        this.directiveRef.scrollTo(x, y);
    };
    PerfectScrollbarComponent.prototype.scrollToTop = function (offset) {
        if (offset === void 0) { offset = 0; }
        console.warn('Deprecated function, scrollToTop needs to be called through directiveRef!');
        this.directiveRef.scrollToTop(offset);
    };
    PerfectScrollbarComponent.prototype.scrollToLeft = function (offset) {
        if (offset === void 0) { offset = 0; }
        console.warn('Deprecated function, scrollToLeft needs to be called through directiveRef!');
        this.directiveRef.scrollToLeft(offset);
    };
    PerfectScrollbarComponent.prototype.scrollToRight = function (offset) {
        if (offset === void 0) { offset = 0; }
        console.warn('Deprecated function, scrollToRight needs to be called through directiveRef!');
        this.directiveRef.scrollToRight(offset);
    };
    PerfectScrollbarComponent.prototype.scrollToBottom = function (offset) {
        if (offset === void 0) { offset = 0; }
        console.warn('Deprecated function, scrollToBottom needs to be called through directiveRef!');
        this.directiveRef.scrollToBottom(offset);
    };
    PerfectScrollbarComponent.prototype.onTouchEnd = function (event) {
        if (event === void 0) { event = null; }
        if (!this.disabled && this.autoPropagation &&
            (!this.usePropagationX || !this.usePropagationY)) {
            this.cancelEvent = null;
            this.allowPropagation = false;
        }
    };
    PerfectScrollbarComponent.prototype.onTouchMove = function (event) {
        if (event === void 0) { event = null; }
        if (!this.disabled && this.autoPropagation && !this.allowPropagation) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    PerfectScrollbarComponent.prototype.onTouchStart = function (event) {
        if (event === void 0) { event = null; }
        if (!this.disabled && this.autoPropagation) {
            this.userInteraction = true;
            if (this.allowPropagation) {
                // PS stops the touchmove event so lets re-emit it here
                if (this.elementRef.nativeElement) {
                    var newEvent = new MouseEvent('touchstart', event);
                    this.cancelEvent = new MouseEvent('touchmove', event);
                    newEvent['psGenerated'] = this.cancelEvent['psGenerated'] = true;
                    newEvent['touches'] = this.cancelEvent['touches'] = event['touches'];
                    newEvent['targetTouches'] = this.cancelEvent['targetTouches'] = event['targetTouches'];
                    this.elementRef.nativeElement.dispatchEvent(newEvent);
                }
            }
            this.cdRef.detectChanges();
        }
    };
    PerfectScrollbarComponent.prototype.onWheelEvent = function (event) {
        if (event === void 0) { event = null; }
        if (!this.disabled && this.autoPropagation) {
            this.userInteraction = true;
            if (!this.allowPropagation) {
                event.preventDefault();
                event.stopPropagation();
            }
            else if (!this.usePropagationX || !this.usePropagationY) {
                this.allowPropagation = false;
            }
            this.cdRef.detectChanges();
        }
    };
    PerfectScrollbarComponent.prototype.onScrollEvent = function (event, state) {
        if (event === void 0) { event = null; }
        if (!this.disabled && event.currentTarget === event.target &&
            (this.autoPropagation || this.scrollIndicators)) {
            this.statesUpdate.next(state);
        }
    };
    PerfectScrollbarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'perfect-scrollbar',
                    template: '<div #ps="ngxPerfectScrollbar" [perfectScrollbar]="getConfig()" [hidden]="hidden" [fxHide]="fxHide" [fxShow]="fxShow" [disabled]="disabled" [usePSClass]="usePSClass" [psPosStyle]="null" [runInsideAngular]="runInsideAngular" (wheel)="onWheelEvent($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="onTouchEnd($event)" (ps-scroll-x)="onScrollEvent($event, \'x\')" (ps-scroll-y)="onScrollEvent($event, \'y\')" (ps-x-reach-end)="onScrollEvent($event, \'right\')" (ps-y-reach-end)="onScrollEvent($event, \'bottom\')" (ps-x-reach-start)="onScrollEvent($event, \'left\')" (ps-y-reach-start)="onScrollEvent($event, \'top\')"><div class="ps-content"><ng-content></ng-content></div><div *ngIf="autoPropagation || scrollIndicators" class="ps-overlay" [class.ps-at-top]="states.top" [class.ps-at-left]="states.left" [class.ps-at-right]="states.right" [class.ps-at-bottom]="states.bottom"><div class="ps-indicator-top" [class.ps-notify]="notify && userInteraction"></div><div class="ps-indicator-left" [class.ps-notify]="notify && userInteraction"></div><div class="ps-indicator-right" [class.ps-notify]="notify && userInteraction"></div><div class="ps-indicator-bottom" [class.ps-notify]="notify && userInteraction"></div></div></div>',
                    styles: ['.ps{-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;-webkit-transition:background-color .2s linear,opacity .2s linear;-o-transition:background-color .2s linear,opacity .2s linear;-moz-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;-o-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;-moz-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out,-moz-border-radius .2s ease-in-out;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out,-webkit-border-radius .2s ease-in-out,-moz-border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;-webkit-transition:background-color .2s linear,opacity .2s linear;-o-transition:background-color .2s linear,opacity .2s linear;-moz-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear;right:0;width:15px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;-o-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;-moz-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out,-moz-border-radius .2s ease-in-out;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out,-webkit-border-radius .2s ease-in-out,-moz-border-radius .2s ease-in-out;right:2px;width:6px}.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{width:11px}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}perfect-scrollbar{position:relative;display:block;height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex],perfect-scrollbar[fxflexfill],perfect-scrollbar[fxlayout]{display:flex;flex-direction:inherit;-webkit-box-orient:inherit;-webkit-box-direction:inherit;height:auto;min-width:0;min-height:0}perfect-scrollbar[fxflex]>.ps,perfect-scrollbar[fxflex]>.ps>.ps-content,perfect-scrollbar[fxflexfill]>.ps,perfect-scrollbar[fxflexfill]>.ps>.ps-content,perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:flex;flex:1 1 auto;-webkit-box-flex:1;-ms-flex:1 1 auto;flex-direction:inherit;-webkit-box-orient:inherit;-webkit-box-direction:inherit;width:auto;height:auto;min-width:0;min-height:0}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__scrollbar-y-rail{top:0!important;right:0!important}perfect-scrollbar>.ps.ps--active-x>.ps__scrollbar-x-rail{bottom:0!important;left:0!important}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__scrollbar-y-rail{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__scrollbar-x-rail{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail,perfect-scrollbar>.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{opacity:.9;background-color:#eee}perfect-scrollbar.ps-spacing-sm,perfect-scrollbar.ps-spacing-tn,perfect-scrollbar.ps-spacing-xs{padding:0 12px 12px 0;margin:0 -12px -12px 0}perfect-scrollbar.ps-spacing-sm>.ps>.ps-overlay,perfect-scrollbar.ps-spacing-tn>.ps>.ps-overlay,perfect-scrollbar.ps-spacing-xs>.ps>.ps-overlay{right:12px;bottom:12px}perfect-scrollbar.ps-spacing-lg,perfect-scrollbar.ps-spacing-md,perfect-scrollbar.ps-spacing-xl{padding:0 24px 24px 0;margin:0 -24px -24px 0}perfect-scrollbar.ps-spacing-lg>.ps>.ps-overlay,perfect-scrollbar.ps-spacing-md>.ps>.ps-overlay,perfect-scrollbar.ps-spacing-xl>.ps>.ps-overlay{right:24px;bottom:24px}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__scrollbar-x-rail,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__scrollbar-y-rail{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-notify{opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-notify{opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-notify{opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-notify{opacity:1}'],
                    encapsulation: core_3.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: core_3.ElementRef, },
        { type: core_3.ChangeDetectorRef, },
    ]; };
    PerfectScrollbarComponent.propDecorators = {
        'fxShow': [{ type: core_2.Input },],
        'fxHide': [{ type: core_2.Input },],
        'hidden': [{ type: core_2.HostBinding, args: ['hidden',] }, { type: core_2.Input },],
        'disabled': [{ type: core_2.Input },],
        'usePSClass': [{ type: core_2.Input },],
        'autoPropagation': [{ type: core_2.HostBinding, args: ['class.ps-show-limits',] }, { type: core_2.Input },],
        'scrollIndicators': [{ type: core_2.HostBinding, args: ['class.ps-show-active',] }, { type: core_2.Input },],
        'runInsideAngular': [{ type: core_2.Input },],
        'config': [{ type: core_2.Input },],
        'directiveRef': [{ type: core_2.ViewChild, args: [perfect_scrollbar_directive_1.PerfectScrollbarDirective,] },],
        'onGeneratedEvent': [{ type: core_2.HostListener, args: ['document:touchstart', ['$event'],] },],
    };
    return PerfectScrollbarComponent;
}());
exports.PerfectScrollbarComponent = PerfectScrollbarComponent;
//# sourceMappingURL=perfect-scrollbar.component.js.map