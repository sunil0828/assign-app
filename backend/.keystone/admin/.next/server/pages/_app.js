module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  type: "number",
  onChange: event => {
    onChange(event.target.value.replace(/\D/g, ''));
  },
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'number' ? value + '' : '';
    },
    serialize: value => ({
      [config.path]: value === '' ? null : parseInt(value, 10)
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          type: "number",
          onChange: event => {
            props.onChange(event.target.value.replace(/[^\d,\s]/g, ''));
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is' ? config.path : `${config.path}_${type}`;
        const valueWithoutWhitespace = value.replace(/\s/g, '');
        return {
          [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',').map(i => parseInt(i)) : parseInt(valueWithoutWhitespace)
        };
      },

      Label({
        label,
        value,
        type
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var types_text_views_dist_fields = __webpack_require__(/*! ../../../text/views/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
__webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'string' ? value : '';
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql({
        type,
        value
      }) {
        switch (type) {
          case 'is':
            {
              return {
                [config.path]: value
              };
            }

          case 'not':
            {
              return {
                [`${config.path}_not`]: value
              };
            }

          case 'in':
            {
              return {
                [`${config.path}_in`]: value.split(',').map(value => value.trim())
              };
            }

          case 'not_in':
            {
              return {
                [`${config.path}_not_in`]: value.split(',').map(value => value.trim())
              };
            }
        }

        return {};
      },

      Label({
        label,
        type,
        value
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = types_text_views_dist_fields.CardValue;
exports.Cell = types_text_views_dist_fields.Cell;
exports.Field = types_text_views_dist_fields.Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var EyeIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeIcon */ "@keystone-ui/icons/icons/EyeIcon");
var EyeOffIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeOffIcon */ "@keystone-ui/icons/icons/EyeOffIcon");
var XIcon = __webpack_require__(/*! @keystone-ui/icons/icons/XIcon */ "@keystone-ui/icons/icons/XIcon");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

const Field = ({
  field,
  value,
  onChange,
  forceValidation,
  autoFocus
}) => {
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validation = shouldShowValidation && value.kind === 'editing' ? value.value === value.confirm ? value.value.length >= field.minLength ? undefined : `The password must be at least ${field.minLength} characters long` : 'The passwords do not match' : undefined;
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange === undefined ? value.isSet ? 'Password is set' : 'Password is not set' : value.kind === 'initial' ? core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password') : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(fields.TextInput, {
    autoFocus: true,
    invalid: validation !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(fields.TextInput, {
    invalid: validation !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validation)));
};
const Cell = ({
  item,
  field
}) => {
  return core.jsx(components.CellContainer, null, item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}_is_set`,
    minLength: config.fieldMeta.minLength,
    defaultValue: {
      kind: 'initial',
      isSet: null
    },

    validate(state) {
      return state.kind === 'initial' || state.value === state.confirm && state.value.length >= config.fieldMeta.minLength;
    },

    deserialize: data => ({
      kind: 'initial',
      isSet: data[`${config.path}_is_set`]
    }),
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: ({
        type,
        value
      }) => {
        return {
          [`${config.path}_${type}`]: value
        };
      },

      Label({
        value
      }) {
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    displayMode: config.fieldMeta.displayMode,
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'string' ? value : '';
    },
    serialize: value => ({
      [config.path]: value
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is_i' ? `${config.path}_i` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var dateFns = __webpack_require__(/*! date-fns */ "date-fns");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

const getTime = timeValue => {
  if (!timeValue) return [0, 0];
  return timeValue.split(':').map(n => Number(n));
};

function isValidDate(date) {
  if (!date) return false;
  return Boolean(dateFns.parseISO(date).toISOString());
}
function isValidTime(time) {
  if (!time) {
    return false;
  }

  return dateFns.isValid(dateFns.parse(time, 'HH:mm', new Date()));
}
function isValidISO(value) {
  try {
    // toISOString converts our string into zulu time
    // instead of checking for the timestamp to be specifically in zulu time
    // we relax the validation here a little, to just be a valid ISO string.
    return Boolean(dateFns.parseISO(constructTimestamp(value)).toISOString());
  } catch (err) {
    return false;
  }
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  let formattedDate = new Date(dateValue);
  const [hours, minutes] = getTime(timeValue);
  formattedDate.setHours(hours);
  formattedDate.setMinutes(minutes);
  return dateFns.formatISO(formattedDate);
}
function deconstructTimestamp(value) {
  return {
    dateValue: value,
    timeValue: resolveInitialTimeValue(value)
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
function resolveInitialTimeValue(value, defaultValue) {
  const date = value || defaultValue;
  if (!date) return '';
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

const TimePicker = ({
  autoFocus,
  onBlur,
  disabled,
  onChange,
  format = '24hr',
  value
}) => {
  return core.jsx(fields.TextInput, {
    autoFocus: autoFocus,
    maxLength: format === '24hr' ? 5 : 7,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    placeholder: format === '24hr' ? '00:00' : '00:00am',
    value: value
  });
};

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;

  const showDateError = dateValue => {
    if (!dateValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a date value.");
    }

    return !isValidDate(dateValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Incorrect date value");
  };

  const showTimeError = timeValue => {
    if (!timeValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a time value.");
    }

    return !isValidTime(timeValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Time must be in the form HH:mm");
  };

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, null, core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: date || ''
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: ''
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: value.dateValue
  }), showValidation && showDateError(value.dateValue)), core.jsx(core.Stack, null, core.jsx(TimePicker, {
    onBlur: () => setTouchedSecondInput(true),
    disabled: onChange === undefined,
    format: "24hr",
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      timeValue: event.target.value
    })),
    value: value.timeValue || ''
  }), showValidation && showTimeError(value.timeValue)))) : isValidISO(value) ? formatOutput(constructTimestamp(value)) : '');
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(components.CellLink, linkTo, formatOutput(value)) : core.jsx(components.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      dateValue: '',
      timeValue: ''
    },
    deserialize: data => {
      const value = data[config.path];

      if (value) {
        return deconstructTimestamp(value);
      }

      return {
        dateValue: '',
        timeValue: ''
      };
    },
    serialize: ({
      dateValue,
      timeValue
    }) => {
      if (dateValue && timeValue && isValidISO({
        dateValue,
        timeValue
      })) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },

    validate({
      dateValue,
      timeValue
    }) {
      if (!dateValue && !timeValue) return true;
      if (!dateValue) return false;
      if (!timeValue) return false;
      return isValidISO({
        dateValue,
        timeValue
      });
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/assign-app/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/mongoId/views */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/text/views */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/password/views */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/integer/views */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/timestamp/views */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__);









const adminConfig = {};
const fieldViews = {
  view58abb11c: _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__,
  viewcda36486: _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__,
  viewee0d8946: _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__,
  view7ce4c750: _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_7__,
  view17bdb4f9: _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__
};
const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'keystone',
          loc: {
            start: 22,
            end: 30
          }
        },
        arguments: [],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'adminMeta',
              loc: {
                start: 39,
                end: 48
              }
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'lists',
                  loc: {
                    start: 59,
                    end: 64
                  }
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [{
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'key',
                      loc: {
                        start: 77,
                        end: 80
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 77,
                      end: 80
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'isHidden',
                      loc: {
                        start: 91,
                        end: 99
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 91,
                      end: 99
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'fields',
                      loc: {
                        start: 110,
                        end: 116
                      }
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [{
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'path',
                          loc: {
                            start: 131,
                            end: 135
                          }
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 131,
                          end: 135
                        }
                      }, {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'createView',
                          loc: {
                            start: 148,
                            end: 158
                          }
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'fieldMode',
                              loc: {
                                start: 175,
                                end: 184
                              }
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 175,
                              end: 184
                            }
                          }],
                          loc: {
                            start: 159,
                            end: 198
                          }
                        },
                        loc: {
                          start: 148,
                          end: 198
                        }
                      }],
                      loc: {
                        start: 117,
                        end: 210
                      }
                    },
                    loc: {
                      start: 110,
                      end: 210
                    }
                  }],
                  loc: {
                    start: 65,
                    end: 220
                  }
                },
                loc: {
                  start: 59,
                  end: 220
                }
              }],
              loc: {
                start: 49,
                end: 228
              }
            },
            loc: {
              start: 39,
              end: 228
            }
          }],
          loc: {
            start: 31,
            end: 234
          }
        },
        loc: {
          start: 22,
          end: 234
        }
      }, {
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'authenticatedItem'
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'InlineFragment',
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User'
              }
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id'
                }
              }, {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name'
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__["Core"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__["KeystoneProvider"], {
    adminConfig: adminConfig,
    adminMetaHash: "1sfb3qw",
    fieldViews: fieldViews,
    lazyMetadataQuery: lazyMetadataQuery
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__["ErrorBoundary"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@keystone-next/admin-ui/components":
/*!*****************************************************!*\
  !*** external "@keystone-next/admin-ui/components" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/components");

/***/ }),

/***/ "@keystone-next/admin-ui/context":
/*!**************************************************!*\
  !*** external "@keystone-next/admin-ui/context" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/context");

/***/ }),

/***/ "@keystone-ui/button":
/*!**************************************!*\
  !*** external "@keystone-ui/button" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/button");

/***/ }),

/***/ "@keystone-ui/core":
/*!************************************!*\
  !*** external "@keystone-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "@keystone-ui/fields":
/*!**************************************!*\
  !*** external "@keystone-ui/fields" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeIcon":
/*!***************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeIcon" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeOffIcon":
/*!******************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeOffIcon" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeOffIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/XIcon":
/*!*************************************************!*\
  !*** external "@keystone-ui/icons/icons/XIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/XIcon");

/***/ }),

/***/ "@keystone-ui/segmented-control":
/*!*************************************************!*\
  !*** external "@keystone-ui/segmented-control" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvYXNzaWduLWFwcC9iYWNrZW5kL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL2Fzc2lnbi1hcHAvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL2Fzc2lnbi1hcHAvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2ludGVnZXIvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9hc3NpZ24tYXBwL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9hc3NpZ24tYXBwL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9tb25nb0lkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvYXNzaWduLWFwcC9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvbW9uZ29JZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvYXNzaWduLWFwcC9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcGFzc3dvcmQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9hc3NpZ24tYXBwL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvYXNzaWduLWFwcC9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGV4dC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL2Fzc2lnbi1hcHAvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL2Fzc2lnbi1hcHAvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL2Fzc2lnbi1hcHAvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9maWVsZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL1hJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImFkbWluQ29uZmlnIiwiZmllbGRWaWV3cyIsInZpZXc1OGFiYjExYyIsInZpZXdjZGEzNjQ4NiIsInZpZXdlZTBkODk0NiIsInZpZXc3Y2U0Yzc1MCIsInZpZXcxN2JkYjRmOSIsImxhenlNZXRhZGF0YVF1ZXJ5Iiwia2luZCIsImRlZmluaXRpb25zIiwib3BlcmF0aW9uIiwic2VsZWN0aW9uU2V0Iiwic2VsZWN0aW9ucyIsIm5hbWUiLCJ2YWx1ZSIsImxvYyIsInN0YXJ0IiwiZW5kIiwiYXJndW1lbnRzIiwiZGlyZWN0aXZlcyIsInR5cGVDb25kaXRpb24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsOERBQThELFlBQVk7QUFDMUU7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7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QU1FLDJEQUFDLGdGQUFELHFCQUNFLDJEQUFDLFNBQUQsRUFBZWdCLFNBQWYsQ0FERixDQU5GLENBREYsQ0FERjtBQWNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU1ELCtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkMjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgYXV0b0ZvY3VzXG59KSA9PiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID8gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgdHlwZTogXCJudW1iZXJcIixcbiAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH0sXG4gIHZhbHVlOiB2YWx1ZVxufSkgOiB2YWx1ZSk7XG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxpbmtUb1xufSkgPT4ge1xuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdICsgJyc7XG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxMaW5rLCBsaW5rVG8sIHZhbHVlKSA6IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgdmFsdWUpO1xufTtcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtmaWVsZC5wYXRoXSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlICsgJycgOiAnJztcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogdmFsdWUgPT4gKHtcbiAgICAgIFtjb25maWcucGF0aF06IHZhbHVlID09PSAnJyA/IG51bGwgOiBwYXJzZUludCh2YWx1ZSwgMTApXG4gICAgfSksXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvW15cXGQsXFxzXS9nLCAnJykpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogcHJvcHMuYXV0b0ZvY3VzXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbDogKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHlwZSA9PT0gJ2lzJyA/IGNvbmZpZy5wYXRoIDogYCR7Y29uZmlnLnBhdGh9XyR7dHlwZX1gO1xuICAgICAgICBjb25zdCB2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlID0gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBba2V5XTogWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSA/IHZhbHVlV2l0aG91dFdoaXRlc3BhY2Uuc3BsaXQoJywnKS5tYXAoaSA9PiBwYXJzZUludChpKSkgOiBwYXJzZUludCh2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlKVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHR5cGVcbiAgICAgIH0pIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgIHJlbmRlcmVkVmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpLmpvaW4oJywgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06ICR7cmVuZGVyZWRWYWx1ZX1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgaXM6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3QgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBndDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGx0OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBsZXNzIHRoYW4nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgZ3RlOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbHRlOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIHR5cGVzX3RleHRfdmlld3NfZGlzdF9maWVsZHMgPSByZXF1aXJlKCcuLi8uLi8uLi90ZXh0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcblxuICAgIGRlc2VyaWFsaXplKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaXRlbVtjb25maWcucGF0aF07XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogJyc7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgICAgICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbCh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lzJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnbm90JzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9X25vdGBdOiB2YWx1ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnaW4nOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFtgJHtjb25maWcucGF0aH1faW5gXTogdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnbm90X2luJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9X25vdF9pbmBdOiB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG4gICAgICB9LFxuXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBsZXQgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChbJ2luJywgJ25vdF9pbiddLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgICAgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IHZhbHVlLnRyaW0oKSkuam9pbignLCAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfTogJHtyZW5kZXJlZFZhbHVlfWA7XG4gICAgICB9LFxuXG4gICAgICB0eXBlczoge1xuICAgICAgICBpczoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpbjoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgb25lIG9mJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9pbjoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkNhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IHR5cGVzX3RleHRfdmlld3NfZGlzdF9maWVsZHMuQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgYnV0dG9uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2J1dHRvbicpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBFeWVJY29uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZUljb24nKTtcbnZhciBFeWVPZmZJY29uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZU9mZkljb24nKTtcbnZhciBYSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9YSWNvbicpO1xudmFyIHNlZ21lbnRlZENvbnRyb2wgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2wnKTtcblxuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBmb3JjZVZhbGlkYXRpb24sXG4gIGF1dG9Gb2N1c1xufSkgPT4ge1xuICBjb25zdCBbc2hvd0lucHV0VmFsdWUsIHNldFNob3dJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvdWNoZWRGaXJzdElucHV0LCBzZXRUb3VjaGVkRmlyc3RJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaGVkU2Vjb25kSW5wdXQsIHNldFRvdWNoZWRTZWNvbmRJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3VsZFNob3dWYWxpZGF0aW9uID0gZm9yY2VWYWxpZGF0aW9uIHx8IHRvdWNoZWRGaXJzdElucHV0ICYmIHRvdWNoZWRTZWNvbmRJbnB1dDtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IHNob3VsZFNob3dWYWxpZGF0aW9uICYmIHZhbHVlLmtpbmQgPT09ICdlZGl0aW5nJyA/IHZhbHVlLnZhbHVlID09PSB2YWx1ZS5jb25maXJtID8gdmFsdWUudmFsdWUubGVuZ3RoID49IGZpZWxkLm1pbkxlbmd0aCA/IHVuZGVmaW5lZCA6IGBUaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCAke2ZpZWxkLm1pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nYCA6ICdUaGUgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGlucHV0VHlwZSA9IHNob3dJbnB1dFZhbHVlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPT09IHVuZGVmaW5lZCA/IHZhbHVlLmlzU2V0ID8gJ1Bhc3N3b3JkIGlzIHNldCcgOiAnUGFzc3dvcmQgaXMgbm90IHNldCcgOiB2YWx1ZS5raW5kID09PSAnaW5pdGlhbCcgPyBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBraW5kOiAnZWRpdGluZycsXG4gICAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGlzU2V0OiB2YWx1ZS5pc1NldFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB2YWx1ZS5pc1NldCA/ICdDaGFuZ2UgUGFzc3dvcmQnIDogJ1NldCBQYXNzd29yZCcpIDogY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJzbWFsbFwiXG4gIH0sIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH1cbiAgfSwgY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICBpbnZhbGlkOiB2YWxpZGF0aW9uICE9PSB1bmRlZmluZWQsXG4gICAgdHlwZTogaW5wdXRUeXBlLFxuICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcbiAgICBwbGFjZWhvbGRlcjogXCJOZXcgUGFzc3dvcmRcIixcbiAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4ge1xuICAgICAgc2V0VG91Y2hlZEZpcnN0SW5wdXQodHJ1ZSk7XG4gICAgfVxuICB9KSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgIGludmFsaWQ6IHZhbGlkYXRpb24gIT09IHVuZGVmaW5lZCxcbiAgICB0eXBlOiBpbnB1dFR5cGUsXG4gICAgdmFsdWU6IHZhbHVlLmNvbmZpcm0sXG4gICAgcGxhY2Vob2xkZXI6IFwiQ29uZmlybSBQYXNzd29yZFwiLFxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgY29uZmlybTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICAgIHNldFRvdWNoZWRTZWNvbmRJbnB1dCh0cnVlKTtcbiAgICB9XG4gIH0pLCBjb3JlLmpzeChTcGFjZXIsIG51bGwpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgc2V0U2hvd0lucHV0VmFsdWUoIXNob3dJbnB1dFZhbHVlKTtcbiAgICB9XG4gIH0sIGNvcmUuanN4KGNvcmUuVmlzdWFsbHlIaWRkZW4sIG51bGwsIHNob3dJbnB1dFZhbHVlID8gJ0hpZGUgVGV4dCcgOiAnU2hvdyBUZXh0JyksIHNob3dJbnB1dFZhbHVlID8gY29yZS5qc3goRXllT2ZmSWNvbi5FeWVPZmZJY29uLCBudWxsKSA6IGNvcmUuanN4KEV5ZUljb24uRXllSWNvbiwgbnVsbCkpLCBjb3JlLmpzeChTcGFjZXIsIG51bGwpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBraW5kOiAnaW5pdGlhbCcsXG4gICAgICAgIGlzU2V0OiB2YWx1ZS5pc1NldFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBjb3JlLmpzeChjb3JlLlZpc3VhbGx5SGlkZGVuLCBudWxsLCBcIkNhbmNlbFwiKSwgY29yZS5qc3goWEljb24uWEljb24sIG51bGwpKSksIHZhbGlkYXRpb24gJiYgY29yZS5qc3goY29yZS5UZXh0LCB7XG4gICAgY29sb3I6IFwicmVkNjAwXCIsXG4gICAgc2l6ZTogXCJzbWFsbFwiXG4gIH0sIHZhbGlkYXRpb24pKSk7XG59O1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGl0ZW1bYCR7ZmllbGQucGF0aH1faXNfc2V0YF0gPyAnSXMgc2V0JyA6ICdJcyBub3Qgc2V0Jyk7XG59O1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtgJHtmaWVsZC5wYXRofV9pc19zZXRgXSA/ICdJcyBzZXQnIDogJ0lzIG5vdCBzZXQnKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGAke2NvbmZpZy5wYXRofV9pc19zZXRgLFxuICAgIG1pbkxlbmd0aDogY29uZmlnLmZpZWxkTWV0YS5taW5MZW5ndGgsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBraW5kOiAnaW5pdGlhbCcsXG4gICAgICBpc1NldDogbnVsbFxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZShzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmtpbmQgPT09ICdpbml0aWFsJyB8fCBzdGF0ZS52YWx1ZSA9PT0gc3RhdGUuY29uZmlybSAmJiBzdGF0ZS52YWx1ZS5sZW5ndGggPj0gY29uZmlnLmZpZWxkTWV0YS5taW5MZW5ndGg7XG4gICAgfSxcblxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+ICh7XG4gICAgICBraW5kOiAnaW5pdGlhbCcsXG4gICAgICBpc1NldDogZGF0YVtgJHtjb25maWcucGF0aH1faXNfc2V0YF1cbiAgICB9KSxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZS5raW5kID09PSAnaW5pdGlhbCcpIHJldHVybiB7fTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IHZhbHVlLnZhbHVlXG4gICAgICB9O1xuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KHNlZ21lbnRlZENvbnRyb2wuU2VnbWVudGVkQ29udHJvbCwge1xuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IE51bWJlcihwcm9wcy52YWx1ZSksXG4gICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKCEhdmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VnbWVudHM6IFsnSXMgTm90IFNldCcsICdJcyBTZXQnXVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV8ke3R5cGV9YF06IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBMYWJlbCh7XG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/ICdpcyBzZXQnIDogJ2lzIG5vdCBzZXQnO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgaXNfc2V0OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBTZXQnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgU3BhY2VyID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgc3BhY2luZ1xuICB9ID0gY29yZS51c2VUaGVtZSgpO1xuICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xuICAgIGNzczoge1xuICAgICAgd2lkdGg6IHNwYWNpbmcuc21hbGwsXG4gICAgICBmbGV4U2hyaW5rOiAwXG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGF1dG9Gb2N1c1xufSkgPT4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGZpZWxkLmRpc3BsYXlNb2RlID09PSAndGV4dGFyZWEnID8gY29yZS5qc3goZmllbGRzLlRleHRBcmVhLCB7XG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKSxcbiAgdmFsdWU6IHZhbHVlXG59KSA6IGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpLFxuICB2YWx1ZTogdmFsdWVcbn0pIDogdmFsdWUpO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCB2YWx1ZSkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIHZhbHVlKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICBkaXNwbGF5TW9kZTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiAoe1xuICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICB9KSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGUgPT09ICdpc19pJyA/IGAke2NvbmZpZy5wYXRofV9pYCA6IGAke2NvbmZpZy5wYXRofV8ke3R5cGV9YDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBba2V5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIHJldHVybiBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfTogXCIke3ZhbHVlfVwiYDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGNvbnRhaW5zX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0NvbnRhaW5zJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9jb250YWluc19pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBjb250YWluJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGlzX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0c193aXRoX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ1N0YXJ0cyB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9zdGFydHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBzdGFydCB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGVuZHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdFbmRzIHdpdGgnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2VuZHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBlbmQgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGRhdGVGbnMgPSByZXF1aXJlKCdkYXRlLWZucycpO1xudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xuXG5jb25zdCBnZXRUaW1lID0gdGltZVZhbHVlID0+IHtcbiAgaWYgKCF0aW1lVmFsdWUpIHJldHVybiBbMCwgMF07XG4gIHJldHVybiB0aW1lVmFsdWUuc3BsaXQoJzonKS5tYXAobiA9PiBOdW1iZXIobikpO1xufTtcblxuZnVuY3Rpb24gaXNWYWxpZERhdGUoZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEJvb2xlYW4oZGF0ZUZucy5wYXJzZUlTTyhkYXRlKS50b0lTT1N0cmluZygpKTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRUaW1lKHRpbWUpIHtcbiAgaWYgKCF0aW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVGbnMuaXNWYWxpZChkYXRlRm5zLnBhcnNlKHRpbWUsICdISDptbScsIG5ldyBEYXRlKCkpKTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRJU08odmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyB0b0lTT1N0cmluZyBjb252ZXJ0cyBvdXIgc3RyaW5nIGludG8genVsdSB0aW1lXG4gICAgLy8gaW5zdGVhZCBvZiBjaGVja2luZyBmb3IgdGhlIHRpbWVzdGFtcCB0byBiZSBzcGVjaWZpY2FsbHkgaW4genVsdSB0aW1lXG4gICAgLy8gd2UgcmVsYXggdGhlIHZhbGlkYXRpb24gaGVyZSBhIGxpdHRsZSwgdG8ganVzdCBiZSBhIHZhbGlkIElTTyBzdHJpbmcuXG4gICAgcmV0dXJuIEJvb2xlYW4oZGF0ZUZucy5wYXJzZUlTTyhjb25zdHJ1Y3RUaW1lc3RhbXAodmFsdWUpKS50b0lTT1N0cmluZygpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBjb25zdHJ1Y3RUaW1lc3RhbXAoe1xuICBkYXRlVmFsdWUsXG4gIHRpbWVWYWx1ZVxufSkge1xuICBsZXQgZm9ybWF0dGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGVWYWx1ZSk7XG4gIGNvbnN0IFtob3VycywgbWludXRlc10gPSBnZXRUaW1lKHRpbWVWYWx1ZSk7XG4gIGZvcm1hdHRlZERhdGUuc2V0SG91cnMoaG91cnMpO1xuICBmb3JtYXR0ZWREYXRlLnNldE1pbnV0ZXMobWludXRlcyk7XG4gIHJldHVybiBkYXRlRm5zLmZvcm1hdElTTyhmb3JtYXR0ZWREYXRlKTtcbn1cbmZ1bmN0aW9uIGRlY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZGF0ZVZhbHVlOiB2YWx1ZSxcbiAgICB0aW1lVmFsdWU6IHJlc29sdmVJbml0aWFsVGltZVZhbHVlKHZhbHVlKVxuICB9O1xufVxuZnVuY3Rpb24gZm9ybWF0T3V0cHV0KHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgcmV0dXJuIGAke2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCl9ICR7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1gO1xufVxuZnVuY3Rpb24gcmVzb2x2ZUluaXRpYWxUaW1lVmFsdWUodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICBjb25zdCBkYXRlID0gdmFsdWUgfHwgZGVmYXVsdFZhbHVlO1xuICBpZiAoIWRhdGUpIHJldHVybiAnJztcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlXG4gIH0pO1xufVxuXG5jb25zdCBUaW1lUGlja2VyID0gKHtcbiAgYXV0b0ZvY3VzLFxuICBvbkJsdXIsXG4gIGRpc2FibGVkLFxuICBvbkNoYW5nZSxcbiAgZm9ybWF0ID0gJzI0aHInLFxuICB2YWx1ZVxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG1heExlbmd0aDogZm9ybWF0ID09PSAnMjRocicgPyA1IDogNyxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIG9uQmx1cjogb25CbHVyLFxuICAgIHBsYWNlaG9sZGVyOiBmb3JtYXQgPT09ICcyNGhyJyA/ICcwMDowMCcgOiAnMDA6MDBhbScsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufTtcblxuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBmb3JjZVZhbGlkYXRpb25cbn0pID0+IHtcbiAgY29uc3QgW3RvdWNoZWRGaXJzdElucHV0LCBzZXRUb3VjaGVkRmlyc3RJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaGVkU2Vjb25kSW5wdXQsIHNldFRvdWNoZWRTZWNvbmRJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dWYWxpZGF0aW9uID0gdG91Y2hlZEZpcnN0SW5wdXQgJiYgdG91Y2hlZFNlY29uZElucHV0IHx8IGZvcmNlVmFsaWRhdGlvbjtcblxuICBjb25zdCBzaG93RGF0ZUVycm9yID0gZGF0ZVZhbHVlID0+IHtcbiAgICBpZiAoIWRhdGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH1cbiAgICAgIH0sIFwiUGxlYXNlIHNlbGVjdCBhIGRhdGUgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNWYWxpZERhdGUoZGF0ZVZhbHVlKSAmJiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICBjc3M6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICB9XG4gICAgfSwgXCJJbmNvcnJlY3QgZGF0ZSB2YWx1ZVwiKTtcbiAgfTtcblxuICBjb25zdCBzaG93VGltZUVycm9yID0gdGltZVZhbHVlID0+IHtcbiAgICBpZiAoIXRpbWVWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH1cbiAgICAgIH0sIFwiUGxlYXNlIHNlbGVjdCBhIHRpbWUgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNWYWxpZFRpbWUodGltZVZhbHVlKSAmJiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICBjc3M6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICB9XG4gICAgfSwgXCJUaW1lIG11c3QgYmUgaW4gdGhlIGZvcm0gSEg6bW1cIik7XG4gIH07XG5cbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChjb3JlLklubGluZSwge1xuICAgIGdhcDogXCJzbWFsbFwiXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KGZpZWxkcy5EYXRlUGlja2VyLCB7XG4gICAgb25VcGRhdGU6IGRhdGUgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGRhdGVWYWx1ZTogZGF0ZSB8fCAnJ1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25DbGVhcjogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGRhdGVWYWx1ZTogJydcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4gc2V0VG91Y2hlZEZpcnN0SW5wdXQodHJ1ZSksXG4gICAgdmFsdWU6IHZhbHVlLmRhdGVWYWx1ZVxuICB9KSwgc2hvd1ZhbGlkYXRpb24gJiYgc2hvd0RhdGVFcnJvcih2YWx1ZS5kYXRlVmFsdWUpKSwgY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goVGltZVBpY2tlciwge1xuICAgIG9uQmx1cjogKCkgPT4gc2V0VG91Y2hlZFNlY29uZElucHV0KHRydWUpLFxuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIGZvcm1hdDogXCIyNGhyXCIsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgdGltZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KSksXG4gICAgdmFsdWU6IHZhbHVlLnRpbWVWYWx1ZSB8fCAnJ1xuICB9KSwgc2hvd1ZhbGlkYXRpb24gJiYgc2hvd1RpbWVFcnJvcih2YWx1ZS50aW1lVmFsdWUpKSkpIDogaXNWYWxpZElTTyh2YWx1ZSkgPyBmb3JtYXRPdXRwdXQoY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSkgOiAnJyk7XG59O1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbExpbmssIGxpbmtUbywgZm9ybWF0T3V0cHV0KHZhbHVlKSkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGZvcm1hdE91dHB1dCh2YWx1ZSkpO1xufTtcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtmaWVsZC5wYXRoXSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgIGRhdGVWYWx1ZTogJycsXG4gICAgICB0aW1lVmFsdWU6ICcnXG4gICAgfSxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZVZhbHVlOiAnJyxcbiAgICAgICAgdGltZVZhbHVlOiAnJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogKHtcbiAgICAgIGRhdGVWYWx1ZSxcbiAgICAgIHRpbWVWYWx1ZVxuICAgIH0pID0+IHtcbiAgICAgIGlmIChkYXRlVmFsdWUgJiYgdGltZVZhbHVlICYmIGlzVmFsaWRJU08oe1xuICAgICAgICBkYXRlVmFsdWUsXG4gICAgICAgIHRpbWVWYWx1ZVxuICAgICAgfSkpIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBjb25zdHJ1Y3RUaW1lc3RhbXAoe1xuICAgICAgICAgIGRhdGVWYWx1ZSxcbiAgICAgICAgICB0aW1lVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2NvbmZpZy5wYXRoXTogZm9ybWF0dGVkRGF0ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSh7XG4gICAgICBkYXRlVmFsdWUsXG4gICAgICB0aW1lVmFsdWVcbiAgICB9KSB7XG4gICAgICBpZiAoIWRhdGVWYWx1ZSAmJiAhdGltZVZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICghZGF0ZVZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIXRpbWVWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGlzVmFsaWRJU08oe1xuICAgICAgICBkYXRlVmFsdWUsXG4gICAgICAgIHRpbWVWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEtleXN0b25lUHJvdmlkZXIgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0JztcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IENvcmUgfSBmcm9tICdAa2V5c3RvbmUtdWkvY29yZSc7XG5cbmltcG9ydCAqIGFzIHZpZXc1OGFiYjExYyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2NkYTM2NDg2IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGV4dC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3ZWUwZDg5NDYgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3N2NlNGM3NTAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXcxN2JkYjRmOSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cyc7XG5cbmNvbnN0IGFkbWluQ29uZmlnID0ge307XG5cbmNvbnN0IGZpZWxkVmlld3MgPSB7XG4gIHZpZXc1OGFiYjExYyxcbiAgdmlld2NkYTM2NDg2LFxuICB2aWV3ZWUwZDg5NDYsXG4gIHZpZXc3Y2U0Yzc1MCxcbiAgdmlldzE3YmRiNGY5LFxufTtcblxuY29uc3QgbGF6eU1ldGFkYXRhUXVlcnkgPSB7XG4gIGtpbmQ6ICdEb2N1bWVudCcsXG4gIGRlZmluaXRpb25zOiBbXG4gICAge1xuICAgICAga2luZDogJ09wZXJhdGlvbkRlZmluaXRpb24nLFxuICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2tleXN0b25lJyxcbiAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAyMiwgZW5kOiAzMCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhZG1pbk1ldGEnLFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDM5LCBlbmQ6IDQ4IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA1OSwgZW5kOiA2NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdrZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDc3LCBlbmQ6IDgwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA3NywgZW5kOiA4MCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2lzSGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogOTEsIGVuZDogOTkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdmaWVsZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExMCwgZW5kOiAxMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAncGF0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTMxLCBlbmQ6IDEzNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTMxLCBlbmQ6IDEzNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NyZWF0ZVZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE0OCwgZW5kOiAxNTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmllbGRNb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNzUsIGVuZDogMTg0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNzUsIGVuZDogMTg0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNTksIGVuZDogMTk4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNDgsIGVuZDogMTk4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTcsIGVuZDogMjEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMjEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA2NSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDU5LCBlbmQ6IDIyMCB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNDksIGVuZDogMjI4IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzOSwgZW5kOiAyMjggfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDMxLCBlbmQ6IDIzNCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYzogeyBzdGFydDogMjIsIGVuZDogMjM0IH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnYXV0aGVudGljYXRlZEl0ZW0nIH0sXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBraW5kOiAnSW5saW5lRnJhZ21lbnQnLFxuICAgICAgICAgICAgICAgICAgdHlwZUNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZWRUeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnVXNlcicgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7IGtpbmQ6ICdGaWVsZCcsIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ2lkJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBraW5kOiAnRmllbGQnLCBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICduYW1lJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvcmU+XG4gICAgICA8S2V5c3RvbmVQcm92aWRlclxuICAgICAgICBhZG1pbkNvbmZpZz17YWRtaW5Db25maWd9XG4gICAgICAgIGFkbWluTWV0YUhhc2g9XCIxc2ZiM3F3XCJcbiAgICAgICAgZmllbGRWaWV3cz17ZmllbGRWaWV3c31cbiAgICAgICAgbGF6eU1ldGFkYXRhUXVlcnk9e2xhenlNZXRhZGF0YVF1ZXJ5fVxuICAgICAgPlxuICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgIDwvS2V5c3RvbmVQcm92aWRlcj5cbiAgICA8L0NvcmU+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvZmllbGRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9YSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==