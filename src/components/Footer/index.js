import Fade from "react-reveal/Fade";

import bird from "../../assets/images/bird_7.png";

import btLogo from "../../assets/images/bt_logo.svg";
import esgLogo from "../../assets/images/esg_logo.svg";
import acbelLogo from "../../assets/images/acbel_logo.svg";
import taiwanOpticalLogo from "../../assets/images/taiwan_optical_short_logo.svg";
import nanshanLogo from "../../assets/images/nanshan_logo.svg";
// import chromaLogo from "../../assets/images/chroma_logo_long.svg";
import simpsonLogo from "../../assets/images/simpson_logo.svg";
import airitiLogo from "../../assets/images/airiti_logo.svg";
import changhuaLogo from "../../assets/images/changhua_logo.svg";
import hiinLogo from "../../assets/images/hiinstudio_logo.svg";
import cciluLogo from "../../assets/images/ccilu_logo.svg";
import azureLogo from "../../assets/images/azure_logo.svg";
import equilibriumLogo from "../../assets/images/equilibrium_logo.svg";
import taiwannewsLogo from "../../assets/images/taiwannews_logo.svg";
import gigabyteLogo from "../../assets/images/gigabyte_logo.svg";
import dcLogo from "../../assets/images/dc_logo.svg";
import creekhealLogo from "../../assets/images/creekheal_logo.svg";
import letsdoitLogo from "../../assets/images/letsdoit_logo.svg";
import aseLogo from "../../assets/images/ase_logo.svg";
import newTaipeiLogo from "../../assets/images/newtaipei_logo.svg";
import taichungLogo from "../../assets/images/logo/taichung_logo.svg";
import sinoPacLogo from "../../assets/images/logo/sinoPac_logo.svg";
import kindomLogo from "../../assets/images/logo/kindom_logo.svg";
import kedgeLogo from "../../assets/images/logo/kedge_logo.svg";
import brotherLogo from "../../assets/images/logo/brother_logo.svg";
import KaohsiungLogo from "../../assets/images/logo/Kaohsiung_logo.svg";
import hpLogo from "../../assets/images/logo/hp_logo.svg";
import gloriDomainLogo from "../../assets/images/logo/gloriDomain_logo.svg";
import chromaLogo from "../../assets/images/logo/chroma_logo2.svg";
import globalmallLogo from "../../assets/images/logo/Globalmall_logo.svg";
import wastonsLogo from "../../assets/images/logo/wastons_logo.svg";
import novaxLogo from "../../assets/images/logo/novax_logo.svg";
import yuantaLogo from "../../assets/images/logo/yuanta_logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="relative text-sm leading-relaxed pt-20 pb-10 px-5 sm:px-20 flex flex-col items-center">
        <Fade bottom>
          <table className="table-auto mb-10">
            <tbody>
              <tr>
                <td className="align-top pr-2 w-20">主辦單位：</td>
                <td className="flex flex-wrap mb-5">
                  <img className="px-3 mb-5" src={btLogo} alt="今周刊 logo" />
                  <img className="px-3 mb-5" src={esgLogo} alt="ESG logo" />
                </td>
              </tr>
              <tr>
                <td className="align-top pr-2 w-20">推動夥伴：</td>
                <td className="flex flex-wrap mb-5">
                  <img
                    className="px-3 mb-8"
                    src={taiwanOpticalLogo}
                    alt="台灣數位光訊科技股份有限公司 logo"
                  />
                  <img
                    className="px-3 mb-8 h-logo-35"
                    src={chromaLogo}
                    alt="致茂電子 logo"
                  />
                  <img
                    className="px-3 mb-8 h-logo"
                    src={hpLogo}
                    alt="惠普科技 logo"
                  />
                  <img
                    className="px-3 mb-8 h-logo"
                    src={sinoPacLogo}
                    alt="永豐金控 logo"
                  />
                  <img
                    className="px-3 mb-8 h-logo"
                    src={kindomLogo}
                    alt="冠德建設 logo"
                  />
                  <img
                    className="px-3 mb-8 h-logo"
                    src={kedgeLogo}
                    alt="根基營造 logo"
                  />
                  <img
                    className="px-3 mb-8 h-logo"
                    src={globalmallLogo}
                    alt="Globalmall logo"
                  />
                  <img
                      className="px-3 mb-8"
                      src={gigabyteLogo}
                      alt="技嘉科技 logo"
                    />
                </td>
              </tr>
              <tr>
                <td className="align-top pr-2 w-20">響應夥伴：</td>
                <td className="flex flex-wrap mb-5">
                  <img
                    className="px-3 mb-8 mt-1 h-logo-25"
                    src={brotherLogo}
                    alt="Brother logo"
                  />
                  <img
                    className="px-3 mb-8 h-logo-35"
                    src={gloriDomainLogo}
                    alt="榮甸國際 logo"
                  />
                  <img
                    className="px-3 mb-8"
                    src={nanshanLogo}
                    alt="南山人壽 logo"
                  />
                  <img
                    className="px-3 mb-8"
                    src={aseLogo}
                    alt="日月光集團 logo"
                  />
                  <img
                    className="px-3 mb-8"
                    src={airitiLogo}
                    alt="華藝數位 logo"
                  />
                  <img
                    className="px-3 mb-8 mt-2 h-logo-25"
                    src={wastonsLogo}
                    alt="屈臣氏 logo"
                  />
                  <img
                    className="px-3 mb-8 h-logo-45"
                    src={novaxLogo}
                    alt="諾瓦科技 logo"
                  />
                  <img
                    className="px-3 mb-8 mt-2 h-logo-30"
                    src={yuantaLogo}
                    alt="元大金控 logo"
                  />
                </td>
              </tr>
              <tr>
                <td className="align-top pr-2 w-20">城市夥伴：</td>
                <td className="flex flex-wrap mb-5">
                  <img
                    className="px-3 mb-5"
                    src={newTaipeiLogo}
                    alt="新北市政府 logo"
                  />
                  <img
                    className="px-3 mb-5 h-logo-40"
                    src={taichungLogo}
                    alt="臺中市政府環境保護局 logo"
                  />
                  <img
                    className="px-3 mb-5 h-logo-40"
                    src={KaohsiungLogo}
                    alt="高雄市政府環境保護局 logo"
                  />
                </td>
              </tr>
              <tr>
                <td className="align-top pr-2 w-20">創始夥伴：</td>
                <td className="flex flex-wrap mb-5">
                  <img
                    className="px-3 mb-8"
                    src={acbelLogo}
                    alt="康舒科技 logo"
                  />
                  <img
                    className="px-3 mb-8"
                    src={simpsonLogo}
                    alt="辛普森遊艇 logo"
                  />
                  <img
                    className="px-3 mb-8"
                    src={creekhealLogo}
                    alt="珂芮爾專業醫學保養 logo"
                  />
                  <img
                    className="px-3 mb-8"
                    src={dcLogo}
                    alt="大謙科技材料 logo"
                  />
                  <img
                    className="px-3 mb-8"
                    src={changhuaLogo}
                    alt="彰化縣政府 logo"
                  />
                </td>
              </tr>
              <tr>
                <td className="align-top pr-2 w-20">社會企業共好夥伴：</td>
                <td className="flex flex-wrap mb-5">
                  <img
                    className="px-3 h-10 mb-5"
                    src={letsdoitLogo}
                    alt="Let’s Do It! Taiwan logo"
                  />
                  <img
                    className="px-3 mb-5"
                    src={cciluLogo}
                    alt="馳綠企業 logo"
                  />
                  <img
                    className="px-3 h-10 mb-5"
                    src={hiinLogo}
                    alt="海湧工作室 logo"
                  />
                  <img className="px-3 mb-5" src={azureLogo} alt="湛 logo" />
                  <img
                    className="px-3 mb-5"
                    src={equilibriumLogo}
                    alt="橘色北極熊 logo"
                  />
                </td>
              </tr>
              <tr>
                <td className="align-top pr-2 w-20">媒體夥伴：</td>
                <td className="flex flex-wrap mb-5">
                  <img
                    className="px-3"
                    src={taiwannewsLogo}
                    alt="Taiwan News logo"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-center">
            今周文化事業(股)公司/今周行銷(股)公司/今周出版(股)公司 版權所有
            <br />
            本網站圖文非經本社同意不得刊載 Copyright ©{' '}
            {new Date().getFullYear()} 今周刊. All rights reserved
          </p>
        </Fade>
        <Fade right>
          <div className="absolute right-2 -top-32 sm:left-2/3 md:left-2/3 w-40">
            <img className="w-full" src={bird} alt="Standing bird" />
          </div>
        </Fade>
      </footer>
    </>
  );
};

export default Footer;
