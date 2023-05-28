import React from "react";
import MenuBar from "../component/MenuBar";
import { useContext } from "react";
import UrlContext from "../context/UrlContext";
import ThreeDotLoading from "../component/Loading";
import * as Yup from "yup";
import { useFormik } from "formik";
import UrlList from "../component/UrlList";

function HomePage() {
  const urlContext = useContext(UrlContext);
  const { loading, ShortenUrls, editUrl, selectedUrl, edit } = urlContext;

  const token = localStorage.getItem("token");

  const urlformdata = useFormik({
    initialValues: {
      longUrl: "",
      tinyUrl: "",
    },
    validationSchema: Yup.object().shape({
      longUrl: Yup.string().url("Invalid URL").required("URL is required"),
      tinyUrl: Yup.string().required("Alias is required"),
    }),
    onSubmit: (userdata) => {
      if (!edit) {
        ShortenUrls(userdata, token);
      } else {
        const url = { ...selectedUrl, ...userdata };
        editUrl(url, token);
      }
    },
  });
  return (
    <>
      <div className="container-fluid pt-2" id="Home">
        <MenuBar />
        <div className="row mx-3 justify-content-between">
          <div className="col-12  col-md-5 mt-5">
            <form onSubmit={urlformdata.handleSubmit}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Shorten a long URL</h5>
                  <input
                    className="form-control py-3 "
                    id="longUrl"
                    label="longUrl"
                    name="longUrl"
                    value={urlformdata.values.longUrl}
                    onChange={urlformdata.handleChange}
                    placeholder="Enter the long URL"
                  />
                  {urlformdata.errors.longUrl ? (
                    <div className="text-danger">
                      {urlformdata.errors.longUrl}
                    </div>
                  ) : (
                    <></>
                  )}

                  <p className="card-title mt-4 fs-5">Customise your Link</p>
                  <div className="d-flex my-2 gap-2">
                    <input
                      className="form-control py-2 text-"
                      type="text"
                      placeholder="localhost:4500/"
                      disabled
                    />

                    <input
                      className="form-control py-2"
                      type="text"
                      id="tinyUrl"
                      label="tinyUrl"
                      name="tinyUrl"
                      placeholder="Enter alias"
                      value={urlformdata.values.tinyUrl}
                      onChange={urlformdata.handleChange}
                    />
                  </div>
                  {urlformdata.errors.tinyUrl ? (
                    <div className="text-danger">
                      {urlformdata.errors.tinyUrl}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                {!edit ? (
                  <button type="submit" className="btn btn-lg btn-success m-3 ">
                    Shorten URL
                  </button>
                ) : (
                  <div
                    className="btn-group m-3"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="submit" className="btn btn-lg btn-success ">
                      Shorten URL
                    </button>
                    <button type="submit" className="btn btn-lg btn-warning ">
                      update URL
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="col-12 col-md-5 mt-5">
            <UrlList urlformdata={urlformdata} />
          </div>
        </div>
      </div>
      <div className={loading ? "d-block" : "d-none"}>
        <ThreeDotLoading />
      </div>
    </>
  );
}

export default HomePage;
