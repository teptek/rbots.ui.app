webpackJsonp([14],{789:function(l,e,n){var a=n(15),t=n(45),s=n(289).PageRenderer;s.__esModule&&(s=s.default);var i=t({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(832)}},componentWillMount:function(){},render:function(){return a.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,l.exports=i},832:function(l,e){l.exports='```html\n\nshowSource: 0\n---\n\n<fieldset class="form-grid">\n    <div class="field-separator"><i class="ico-info"></i><span data-tooltip><label>Separator</label></span><hr></div>\n    <div class="grid-x">\n        <div class="cell large-6">\n            <div class="grid-x">\n                <div class="field cell large-6">\n                    <span data-tooltip><label class="rlabel">Text</label></span>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n                \n                <div class="field cell large-6">\n                    <label class="rlabel">text</label>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n            </div>\n        </div>\n        <div class="cell large-6">\n            <div class="grid-x">\n                <div class="field cell large-6">\n                    <span data-tooltip><label class="rlabel">Text</label></span>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n                \n                <div class="field cell large-6">\n                    <label class="rlabel">text</label>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="grid-x">\n        <div class="cell large-6">\n            <div class="grid-x">\n                <div class="field cell large-6">\n                    <span data-tooltip><label class="rlabel">Text</label></span>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n                \n                <div class="field cell large-6">\n                    <label class="rlabel">text</label>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n            </div>\n        </div>\n        <div class="cell large-6">\n            <div class="grid-x">\n                <div class="field cell large-6">\n                    <label class="rlabel">Text</label>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n                \n                <div class="field cell large-6">\n                    <label class="rlabel">text</label>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n            </div>\n        </div>\n    </div>\n</fieldset>\n\n<fieldset class="form-grid">\n    <div class="field-separator"><i class="ico-time"></i><label>Separator</label><hr></div>\n    <div class="grid-x">\n        <div class="field cell large-6">\n            <label class="rlabel">Text</label>\n            <input type="text" placeholder="Type your text here">\n        </div>\n        <div class="cell large-6">\n            <div class="grid-x">\n                <div class="field cell large-6">\n                    <label class="rlabel">Label</label>\n                    <select class="rselect">\n                        <option class="select-placeholder" selected>Select</option>\n                        <option>Option 1</option>\n                        <option>Option 2</option>\n                    </select>\n                </div>\n                \n                <div class="field cell large-6 field-checkbox">\n                <label class="rlabel">Radio</label>\n                    <label class="checkbox">\n                      <input type="checkbox" checked>\n                      <span class="checkmark"></span>Standard\n                    </label>\n                    \n                    <label class="checkbox read-only-checked">\n                      <input type="checkbox" onclick="return false;" checked>\n                      <span class="checkmark"></span>Checked (read-only)\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="grid-x">\n        <div class="cell large-6">\n            <div class="grid-x">\n                <div class="field cell large-6 input-lang-field">\n                    <span data-tooltip><label class="rlabel">Language</label></span>            \n                    <input type="text" placeholder="Type your text here">\n                    <button class="input-lang-en"></button>\n                    <button class="input-lang-fr active"></button>\n                \n                </div>\n                \n                <div class="field field-radio cell large-6">\n                <label class="rlabel">Checkbox</label>\n                    <label class="radio">\n                      <input type="radio">\n                      <span class="checkmark"></span>Item 1\n                    </label>\n                    \n                    <label class="radio">\n                      <input type="radio">\n                      <span class="checkmark"></span>Item 2\n                    </label>\n                    \n                    <label class="radio">\n                      <input type="radio" checked>\n                      <span class="checkmark"></span>Item 3\n                    </label>\n                </div>\n            </div>\n        </div>\n        <div class="cell large-6">\n            <div class="grid-x">\n                <div class="field cell large-6">\n                    <label class="rlabel">Text</label>\n                    <input type="text" placeholder="Type your text here">\n                </div>\n                \n                <div class="field cell large-6 attached-files">\n                \n                    <label class="rlabel">Attached Files</label>\n                    <a href="#">\n                        <i class="ico-attached ico-small ico-blue"></i>\n                       2 document(s)\n                    </a>\n                \n                </div>\n            </div>\n        </div>\n    </div>\n</fieldset>\n\n<fieldset class="form-grid submit">\n    <button class="button-empty">Annuler et retourner \xe0 la liste</button>\n    <button class="button-blue-light"><i class="ico-download"></i>Exporter</button>\n    <button class="button-yellow"><i class="ico-save"></i>Sauvegarder</button>\n</fieldset>\n\n```\n\n## With regular content\n\n```code\nlang: html\n---\n\n<fieldset class="form-grid">\n    <div class="grid-x">    -- row\n        <div class="cell large-6">    -- col\n        \n        -- regular content --\n        \n        </div>\n    </div>\n</fieldset>\n\n```\n\n## With form content\n\n#### Add "field" class to column tag\n\n\n```code\nlang: html\n---\n\n<fieldset class="form-grid">\n    <div class="grid-x">    -- row\n        <div class="field cell large-6">    -- col\n        \n        -- form content --\n        \n        <label class="rlabel"></label>\n        <input type="text">\n        \n        </div>\n    </div>\n</fieldset>\n\n```\n\n\n## Full-width fieldset\n\n#### Add "full" class to "form-grid" tag\n\n\n```code\nlang: html\n---\n\n<fieldset class="form-grid full">\n    <div class="grid-x">    -- row\n        <div class="cell large-6">    -- col\n        \n        -- regular content --\n        \n        </div>\n    </div>\n</fieldset>\n\n```\n\n```html\n\nshowSource: 0\n---\n\n<fieldset class="form-grid full">\n    <div class="field-separator"><i class="ico-info"></i><label>Separator</label><hr></div>\n    <div class="grid-x">\n        <div class="field cell large-6">\n            <label class="rlabel">Text</label>\n            <input type="text" placeholder="Type your text here">\n        </div>\n        <div class="field cell large-6">\n            <label class="rlabel">Text</label>\n            <input type="text" placeholder="Type your text here">\n        </div>\n    </div>\n</fieldset>\n\n```'}});
//# sourceMappingURL=14.efbd377c.chunk.js.map