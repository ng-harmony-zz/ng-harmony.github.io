import { Controller } from "ng-harmony/ng-harmony";
import * from "ng-harmony/ng-harmony-annotate";

@Component({
	module: ng-harmony.github.io,
	selector: "todo-focus",
	restrict: "A",
	scope: {}
})
@Controller({
	module: ng-harmony.github.io,
	name: "Focus",
	deps: ["$element", "$timeout"]
})
class FocusController {
	this.$scope.$watch(this.$attrs., function (newVal) {
		if (newVal) {
			this.$timeout(function () {
				this.$element[0].focus();
			}, 0, false);
		}
	});
}