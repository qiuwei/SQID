define(['rules/rules.module'
       ],
function() {
    angular.module('rules').factory('references',
    ['ast',
    function(ast) {
        function generateReference(query) {
            var bindings = {};

            angular.forEach(query.bindings, function(binding) {
                if (('id' in binding) && ('name' in binding))  {
                    bindings[binding.name] = binding.id;
                }
            });

            angular.forEach(ast.variables(query.rule.head), function(variable) {
                var name = variable.name;
                bindings[name] = { id: query.bindings[name].id,
                                   type: query.bindings[name].type,
                                   qualifiers: query.bindings[name].qualifiers
                                 };
            });

            var info = { rule: query.rule,
                         query: query.query,
                         bindings: bindings,
                         constraints: query.constraints
            };
            var url = ('#/rules/explain?inference=' +
                       encodeURIComponent(angular.toJson(info, false)));
            var reference = { P854: [{ datatype: 'url',
                                       datavalue: { type: 'string',
                                                    value: url,
                                                    __sqid_display_string_override__: '(explain inference)'
                                                  },
                                       snaktype: 'value',
                                       property: 'P854'
                                     }]
                            };

            return [{ snaks: reference,
                      'snaks-order': ['P854']
                    }];
        }

        return { generateReference: generateReference
               };
    }]);

    return {};
});