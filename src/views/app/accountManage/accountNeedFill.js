import React, { useState } from 'react';
const same_info = () => {
  console.log('here is same_info');
};
const getCity = () => {
  console.log('get City is here');
};

const AccountNeedFill = () => {
  const [activebtn, setActiveBtn] = useState(false);
  const [activeNonCompact, setActiveNonCompact] = useState(false);
  const [activeCompactFill, setActiveCompactFill] = useState(false);
  const [activeCompactRock, setActiveCompactRock] = useState(false);
  const [activeTopsoil, setActiveTopsoil] = useState(false);
  const [activeOther, setActiveOther] = useState(false);
  const setActiveButton = () => {
    setActiveBtn(!activebtn);
  };
  const setNonCompactFill = () => {
    setActiveNonCompact(!activeNonCompact);
  };
  return (
    <section className="section-content dirt-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-12 new_style">
                <h3>
                  <img src="/assets/icons/a_down_maxi.png" alt="" />
                  <a
                    onClick="xajax_clear_form(xajax.getFormValues('pform'));"
                    href="/"
                  >
                    Add need fill
                    <p>
                      <i>*</i> means mandatory, please fill in the form below
                      and after select the type of fill you have
                    </p>
                  </a>
                </h3>
                <br />
                <div className="row">
                  <div className="col-sm-7">
                    <label className="control-label">Conditions :</label>
                    <select
                      name="conditions"
                      id="conditions"
                      className="form-control"
                    >
                      <option value="Free">Free</option>
                      <option value="Paying/Selling">Paying/Selling</option>
                      <option value="Negotiable">Negotiable</option>
                    </select>
                    <br />
                    <label className="control-label">Soil Report :</label>
                    <select
                      name="soil_report"
                      id="soil_report"
                      className="form-control"
                    >
                      <option value="Tested">Tested</option>
                      <option value="Not_Tested">Not Tested</option>
                    </select>
                    <br />
                    <label className="control-label">
                      Address <em className="error_">*</em> :
                    </label>
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      maxLength="100"
                      id="address"
                      value=""
                    />
                    <br />
                    <label className="control-label">Country :</label>
                    <select
                      name="country"
                      id="country"
                      className="form-control"
                    >
                      <option value="Canada">&nbsp;&nbsp;Canada</option>
                      <option value="United States">
                        &nbsp;&nbsp;United States
                      </option>
                      <option value="Australia">&nbsp;&nbsp;Australia</option>
                      <option value="New Zealand">
                        &nbsp;&nbsp;New Zealand
                      </option>
                      <option value="Ireland">&nbsp;&nbsp;Ireland</option>
                      <option value="Norway">&nbsp;&nbsp;Norway</option>
                      <option value="United Kingdom">
                        &nbsp;&nbsp;United Kingdom
                      </option>
                    </select>
                    <br />
                    <label className="control-label">
                      State/Province <em className="error_">*</em> :
                    </label>
                    <select
                      name="state"
                      type="text"
                      className="form-control"
                      id="state"
                    >
                      <option value="Alabama">&nbsp;&nbsp;Alabama</option>
                      <option value="Alaska">&nbsp;&nbsp;Alaska</option>
                      <option value="American Samoa">
                        &nbsp;&nbsp;American Samoa
                      </option>
                      <option value="Arizona">&nbsp;&nbsp;Arizona</option>
                      <option value="Arkansas">&nbsp;&nbsp;Arkansas</option>
                      <option value="Armed Forces Africa">
                        &nbsp;&nbsp;Armed Forces Africa
                      </option>
                      <option value="Armed Forces Americas">
                        &nbsp;&nbsp;Armed Forces Americas
                      </option>
                      <option value="Armed Forces Canada">
                        &nbsp;&nbsp;Armed Forces Canada
                      </option>
                      <option value="Armed Forces Europe">
                        &nbsp;&nbsp;Armed Forces Europe
                      </option>
                      <option value="Armed Forces Middle East">
                        &nbsp;&nbsp;Armed Forces Middle East
                      </option>
                      <option value="Armed Forces Pacific">
                        &nbsp;&nbsp;Armed Forces Pacific
                      </option>
                      <option value="California">&nbsp;&nbsp;California</option>
                      <option value="Colorado">&nbsp;&nbsp;Colorado</option>
                      <option value="Connecticut">
                        &nbsp;&nbsp;Connecticut
                      </option>
                      <option value="Delaware">&nbsp;&nbsp;Delaware</option>
                      <option value="District of Columbia">
                        &nbsp;&nbsp;District of Columbia
                      </option>
                      <option value="Federated States Of Micronesia">
                        &nbsp;&nbsp;Federated States Of Micronesia
                      </option>
                      <option value="Florida">&nbsp;&nbsp;Florida</option>
                      <option value="Georgia">&nbsp;&nbsp;Georgia</option>
                      <option value="Guam">&nbsp;&nbsp;Guam</option>
                      <option value="Hawaii">&nbsp;&nbsp;Hawaii</option>
                      <option value="Idaho">&nbsp;&nbsp;Idaho</option>
                      <option value="Illinois">&nbsp;&nbsp;Illinois</option>
                      <option value="Indiana">&nbsp;&nbsp;Indiana</option>
                      <option value="Iowa">&nbsp;&nbsp;Iowa</option>
                      <option value="Kansas">&nbsp;&nbsp;Kansas</option>
                      <option value="Kentucky">&nbsp;&nbsp;Kentucky</option>
                      <option value="Louisiana">&nbsp;&nbsp;Louisiana</option>
                      <option value="Maine">&nbsp;&nbsp;Maine</option>
                      <option value="Marshall Islands">
                        &nbsp;&nbsp;Marshall Islands
                      </option>
                      <option value="Maryland">&nbsp;&nbsp;Maryland</option>
                      <option value="Massachusetts">
                        &nbsp;&nbsp;Massachusetts
                      </option>
                      <option value="Michigan">&nbsp;&nbsp;Michigan</option>
                      <option value="Minnesota">&nbsp;&nbsp;Minnesota</option>
                      <option value="Mississippi">
                        &nbsp;&nbsp;Mississippi
                      </option>
                      <option value="Missouri">&nbsp;&nbsp;Missouri</option>
                      <option value="Montana">&nbsp;&nbsp;Montana</option>
                      <option value="Nebraska">&nbsp;&nbsp;Nebraska</option>
                      <option value="Nevada">&nbsp;&nbsp;Nevada</option>
                      <option value="New Hampshire">
                        &nbsp;&nbsp;New Hampshire
                      </option>
                      <option value="New Jersey">&nbsp;&nbsp;New Jersey</option>
                      <option value="New Mexico">&nbsp;&nbsp;New Mexico</option>
                      <option value="New York">&nbsp;&nbsp;New York</option>
                      <option value="North Carolina">
                        &nbsp;&nbsp;North Carolina
                      </option>
                      <option value="North Dakota">
                        &nbsp;&nbsp;North Dakota
                      </option>
                      <option value="Northern Mariana Islands">
                        &nbsp;&nbsp;Northern Mariana Islands
                      </option>
                      <option value="Ohio">&nbsp;&nbsp;Ohio</option>
                      <option value="Oklahoma">&nbsp;&nbsp;Oklahoma</option>
                      <option value="Oregon">&nbsp;&nbsp;Oregon</option>
                      <option value="Palau">&nbsp;&nbsp;Palau</option>
                      <option value="Pennsylvania">
                        &nbsp;&nbsp;Pennsylvania
                      </option>
                      <option value="Puerto Rico">
                        &nbsp;&nbsp;Puerto Rico
                      </option>
                      <option value="Rhode Island">
                        &nbsp;&nbsp;Rhode Island
                      </option>
                      <option value="South Carolina">
                        &nbsp;&nbsp;South Carolina
                      </option>
                      <option value="South Dakota">
                        &nbsp;&nbsp;South Dakota
                      </option>
                      <option value="Tennessee">&nbsp;&nbsp;Tennessee</option>
                      <option value="Texas">&nbsp;&nbsp;Texas</option>
                      <option value="Utah">&nbsp;&nbsp;Utah</option>
                      <option value="Vermont">&nbsp;&nbsp;Vermont</option>
                      <option value="Virgin Islands">
                        &nbsp;&nbsp;Virgin Islands
                      </option>
                      <option value="Virginia">&nbsp;&nbsp;Virginia</option>
                      <option value="Washington">&nbsp;&nbsp;Washington</option>
                      <option value="West Virginia">
                        &nbsp;&nbsp;West Virginia
                      </option>
                      <option value="Wisconsin">&nbsp;&nbsp;Wisconsin</option>
                      <option value="Wyoming">&nbsp;&nbsp;Wyoming</option>
                    </select>
                    <br />
                    <label className="control-label">
                      City <em className="error_">*</em> :
                    </label>
                    <input
                      name="city"
                      type="text"
                      className="form-control"
                      id="city"
                      value=""
                      maxLength="50"
                    />
                    <br />
                    <label className="control-label">
                      Quantity <em className="error_">*</em> :
                    </label>
                    <input
                      name="quantity"
                      type="text"
                      className="form-control"
                      id="quantity"
                      value=""
                      maxLength="100"
                    />
                    <br />
                    <label className="control-label">
                      Details <em className="error_">*</em> :
                    </label>
                    <input
                      name="details"
                      type="text"
                      className="form-control"
                      maxlength="120"
                      id="details"
                      value=""
                    />
                    <br />
                  </div>
                  <div className="col-sm-5">
                    <div className="id_filltype">Select Fill Type</div>
                    <div className="id_filltype_cont">
                      <p>
                        Click on According Category and Select One Or More Fill
                        Type Below
                      </p>
                      <h4
                        className="id_fill1"
                        onClick={() => setActiveNonCompact(!activeNonCompact)}
                      >
                        <img src="/assets/icons/type_1.jpg" alt="" />
                        Non-Compactable Fill
                      </h4>
                      <div
                        className={
                          activeNonCompact
                            ? 'id_fill1_cont'
                            : 'id_fill1_cont d-none'
                        }
                      >
                        <label className="control-label">
                          <input
                            name="clay"
                            type="checkbox"
                            value="1"
                            className="clay"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Clay
                        </label>
                        <label className="control-label">
                          <input
                            name="sand"
                            type="checkbox"
                            value="1"
                            className="sand"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Sand{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="sand_clay"
                            type="checkbox"
                            className="sand_clay"
                            value="1"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Sand Clay
                        </label>
                        <br clear="all" />
                        <br />
                      </div>

                      <h4
                        className="id_fill2"
                        onClick={() => setActiveCompactFill(!activeCompactFill)}
                      >
                        <img src="/assets/icons/type_2.jpg" alt="" />
                        Compactable Fill
                      </h4>
                      <div
                        className={
                          activeCompactFill
                            ? 'id_fill2_cont'
                            : 'id_fill2_cont d-none'
                        }
                      >
                        <label className="control-label">
                          <input
                            name="clean_fill"
                            type="checkbox"
                            value="1"
                            className="clean_fill"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Clean Fill{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="rough_fill"
                            type="checkbox"
                            value="1"
                            className="rough_fill"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Rough Fill
                        </label>
                        <br clear="all" />
                        <br />
                      </div>

                      <h4
                        className="id_fill3"
                        onClick={() => setActiveCompactRock(!activeCompactRock)}
                      >
                        <img src="/assets/icons/type_3.jpg" alt="" />
                        Compactable Rock
                      </h4>
                      <div
                        className={
                          activeCompactRock
                            ? 'id_fill3_cont'
                            : 'id_fill3_cont d-none'
                        }
                      >
                        <label className="control-label">
                          <input
                            name="gravel"
                            type="checkbox"
                            value="1"
                            className="gravel"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Gravel{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="recycled_asphalt"
                            type="checkbox"
                            value="1"
                            className="recycled_asphalt"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Recycled Asphalt{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="recycled_base_material"
                            type="checkbox"
                            value="1"
                            className="recycled_base_material"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Recycled Base Material{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="recycled_concrete"
                            type="checkbox"
                            value="1"
                            className="recycled_concrete"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Recycled Concrete
                        </label>
                        <br clear="all" />
                        <br />
                      </div>

                      <h4
                        className="id_fill4"
                        onClick={() => setActiveTopsoil(!activeTopsoil)}
                      >
                        <img src="/assets/icons/type_4.jpg" alt="" />
                        Topsoil
                      </h4>
                      <div
                        className={
                          activeTopsoil
                            ? 'id_fill4_cont'
                            : 'id_fill4_cont d-none'
                        }
                      >
                        <label className="control-label">
                          <input
                            name="peat"
                            type="checkbox"
                            value="1"
                            className="peat"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Peat{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="topsoil_average"
                            type="checkbox"
                            value="1"
                            className="topsoil_average"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Topsoil-Average
                        </label>
                        <label className="control-label">
                          <input
                            name="topsoil_clean"
                            type="checkbox"
                            value="1"
                            className="topsoil_clean"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Topsoil-Clean{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="topsoil_economy"
                            type="checkbox"
                            value="1"
                            className="topsoil_economy"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Topsoil-Economy
                        </label>
                        <br clear="all" />
                        <br />
                      </div>

                      <h4
                        className="id_fill5"
                        onClick={() => setActiveOther(!activeOther)}
                      >
                        <img src="/assets/icons/type_5.jpg" alt="" />
                        Other
                      </h4>
                      <div
                        className={
                          activeOther ? 'id_fill5_cont' : 'id_fill5_cont d-none'
                        }
                      >
                        <label className="control-label">
                          <input
                            name="ashpalt_mix"
                            type="checkbox"
                            value="1"
                            className="ashpalt_mix"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Ashpalt Mix{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="asphalt_chunks"
                            type="checkbox"
                            value="1"
                            className="asphalt_chunks"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Asphalt Chunks{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="boulders"
                            type="checkbox"
                            value="1"
                            className="boulders"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Boulders{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="concrete_chunks"
                            type="checkbox"
                            value="1"
                            className="concrete_chunks"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Concrete Chunks
                        </label>

                        <label className="control-label">
                          <input
                            name="concrete_ready_mix"
                            type="checkbox"
                            value="1"
                            className="concrete_ready_mix"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Concrete Ready Mix{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="decorative_rock"
                            type="checkbox"
                            value="1"
                            className="decorative_rock"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Decorative Rock{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="demolition_materials"
                            type="checkbox"
                            value="1"
                            className="demolition_materials"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Demolition Materials
                        </label>
                        <label className="control-label">
                          {' '}
                          <input
                            name="mulch"
                            type="checkbox"
                            value="1"
                            className="mulch"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Mulch
                        </label>

                        <label className="control-label">
                          <input
                            name="rip_rap"
                            type="checkbox"
                            value="1"
                            className="rip_rap"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Rip Rap{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="river_rock"
                            type="checkbox"
                            value="1"
                            className="river_rock"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; River Rock{' '}
                        </label>
                        <label className="control-label">
                          <input
                            name="wood_chips"
                            type="checkbox"
                            value="1"
                            className="wood_chips"
                            onClick="ckeck_count(this)"
                          />
                          &nbsp; Wood Chips
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="bot_add d-inline visible">
                      <br />
                      <br />
                      <input
                        name="terms"
                        type="checkbox"
                        value="1"
                        id="terms"
                        onClick={() => setActiveButton()}
                      />
                      &nbsp;&nbsp; I agree to the Terms of Use of this site. You
                      must agree to the terms to continue.
                      <br />
                      <br />
                      <input
                        name="add"
                        type="submit"
                        className={
                          activebtn
                            ? 'btn btn-lg btn-success'
                            : 'btn btn-lg btn-success disabled'
                        }
                        id="add"
                        value="Post Your Need Fill Listing"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccountNeedFill;
