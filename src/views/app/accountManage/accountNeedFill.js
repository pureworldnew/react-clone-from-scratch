import React from 'react';
const same_info = () => {
  console.log('here is same_info');
};
const getCity = () => {
  console.log('get City is here');
};
const AccountNeedFill = () => (
  <section className="section-content dirt-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 new_style">
              <form
                name="pform"
                id="pform"
                action=""
                method="post"
                className="form-horizontal"
              >
                <div className="right_info ">
                  <h3>
                    <img
                      src="https://www.cleanfill.net/themes/modern/icons/a_down_maxi.png"
                      alt=""
                    />
                    <a
                      id="add_new"
                      onClick="xajax_clear_form(xajax.getFormValues('pform'));"
                    >
                      Add need fill
                      <p>
                        <i>*</i> means mandatory, please fill in the form below
                        and after select the type of fill you have
                      </p>
                    </a>
                  </h3>
                  <div>
                    <span id="error"></span>
                  </div>
                  <br clear="all" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AccountNeedFill;
