window.$ = window.jQuery = function(selectorOrArray) {
    // const elements = document.querySelectorAll(selectorOrArray );
    let elements;
    if (typeof selectorOrArray === `string`) elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
    return {
        oldApi: selectorOrArray.oldApi,
        addClass (className) {
            for(let i = 0; i < elements.length; i++){
                const element = elements[i];
                element.classList.add(className);
            }
            return this;
        },
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                array = array.concat(elements2);
            }
            array.oldApi = this;
            return jQuery(array);
        //等于：
        // const newApi = jQuery(array);
        // return newApi;
        },
        end (selector) {
            //  if (typeof selector === `string`) {
            //      return jQuery(selector);
            //  } else {
            return this.oldApi;
        //  }
        // return jQuery(selector);
        },
        //  end() {
        //     return this.oldApi;
        // }
        each (fn) {
            for(let i = 0; i < elements.length; i++)fn.call(null, elements[i], i);
            return this;
        },
        parent () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.parentNode) === -1) array.push(node.parentNode);
            });
            array.oldApi = this;
            return jQuery(array);
        },
        printf () {
            console.log(elements);
        },
        children () {
            const array = [];
            this.each((node)=>{
                array.push(...node.children);
            });
            return jQuery(array);
        }
    };
};

//# sourceMappingURL=index.64f83c4c.js.map
