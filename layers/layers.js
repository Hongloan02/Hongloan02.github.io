var wms_layers = [];

var format_Tinh_YenBai_0 = new ol.format.GeoJSON();
var features_Tinh_YenBai_0 = format_Tinh_YenBai_0.readFeatures(json_Tinh_YenBai_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tinh_YenBai_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tinh_YenBai_0.addFeatures(features_Tinh_YenBai_0);
var lyr_Tinh_YenBai_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tinh_YenBai_0, 
                style: style_Tinh_YenBai_0,
                popuplayertitle: "Tinh_YenBai",
                interactive: true,
                title: '<img src="styles/legend/Tinh_YenBai_0.png" /> Tinh_YenBai'
            });
var format_Huyen_YenBai_1 = new ol.format.GeoJSON();
var features_Huyen_YenBai_1 = format_Huyen_YenBai_1.readFeatures(json_Huyen_YenBai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huyen_YenBai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huyen_YenBai_1.addFeatures(features_Huyen_YenBai_1);
var lyr_Huyen_YenBai_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huyen_YenBai_1, 
                style: style_Huyen_YenBai_1,
                popuplayertitle: "Huyen_YenBai",
                interactive: true,
    title: 'Huyen_YenBai<br />\
    <img src="styles/legend/Huyen_YenBai_1_0.png" /> Lục Yên<br />\
    <img src="styles/legend/Huyen_YenBai_1_1.png" /> Mù Căng Chải<br />\
    <img src="styles/legend/Huyen_YenBai_1_2.png" /> Nghĩa Lộ<br />\
    <img src="styles/legend/Huyen_YenBai_1_3.png" /> Trạm Tấu<br />\
    <img src="styles/legend/Huyen_YenBai_1_4.png" /> Trấn Yên<br />\
    <img src="styles/legend/Huyen_YenBai_1_5.png" /> Văn Chấn<br />\
    <img src="styles/legend/Huyen_YenBai_1_6.png" /> Văn Yên<br />\
    <img src="styles/legend/Huyen_YenBai_1_7.png" /> Yên Bái<br />\
    <img src="styles/legend/Huyen_YenBai_1_8.png" /> Yên Bình<br />'
        });
var format_Matdodanso_2 = new ol.format.GeoJSON();
var features_Matdodanso_2 = format_Matdodanso_2.readFeatures(json_Matdodanso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matdodanso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matdodanso_2.addFeatures(features_Matdodanso_2);
var lyr_Matdodanso_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matdodanso_2, 
                style: style_Matdodanso_2,
                popuplayertitle: "Matdodanso",
                interactive: true,
                title: 'Matdodanso'
            });
var format_DuongQuocLo_3 = new ol.format.GeoJSON();
var features_DuongQuocLo_3 = format_DuongQuocLo_3.readFeatures(json_DuongQuocLo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DuongQuocLo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DuongQuocLo_3.addFeatures(features_DuongQuocLo_3);
var lyr_DuongQuocLo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DuongQuocLo_3, 
                style: style_DuongQuocLo_3,
                popuplayertitle: "DuongQuocLo",
                interactive: true,
                title: '<img src="styles/legend/DuongQuocLo_3.png" /> DuongQuocLo'
            });
var format_DuongSong_4 = new ol.format.GeoJSON();
var features_DuongSong_4 = format_DuongSong_4.readFeatures(json_DuongSong_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DuongSong_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DuongSong_4.addFeatures(features_DuongSong_4);
var lyr_DuongSong_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DuongSong_4, 
                style: style_DuongSong_4,
                popuplayertitle: "DuongSong",
                interactive: true,
                title: '<img src="styles/legend/DuongSong_4.png" /> DuongSong'
            });
var format_UBND_Huyen_5 = new ol.format.GeoJSON();
var features_UBND_Huyen_5 = format_UBND_Huyen_5.readFeatures(json_UBND_Huyen_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBND_Huyen_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBND_Huyen_5.addFeatures(features_UBND_Huyen_5);
var lyr_UBND_Huyen_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBND_Huyen_5, 
                style: style_UBND_Huyen_5,
                popuplayertitle: "UBND_Huyen",
                interactive: true,
                title: '<img src="styles/legend/UBND_Huyen_5.png" /> UBND_Huyen'
            });

lyr_Tinh_YenBai_0.setVisible(true);lyr_Huyen_YenBai_1.setVisible(true);lyr_Matdodanso_2.setVisible(true);lyr_DuongQuocLo_3.setVisible(true);lyr_DuongSong_4.setVisible(true);lyr_UBND_Huyen_5.setVisible(true);
var layersList = [lyr_Tinh_YenBai_0,lyr_Huyen_YenBai_1,lyr_Matdodanso_2,lyr_DuongQuocLo_3,lyr_DuongSong_4,lyr_UBND_Huyen_5];
lyr_Tinh_YenBai_0.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Huyen_YenBai_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Matdodanso': 'Matdodanso', });
lyr_Matdodanso_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Matdodanso': 'Matdodanso', });
lyr_DuongQuocLo_3.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_DuongSong_4.set('fieldAliases', {'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_UBND_Huyen_5.set('fieldAliases', {'id': 'id', 'TenUBND': 'TenUBND', });
lyr_Tinh_YenBai_0.set('fieldImages', {'GID_1': '', 'GID_0': '', 'COUNTRY': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', 'ISO_1': '', });
lyr_Huyen_YenBai_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Matdodanso': 'TextEdit', });
lyr_Matdodanso_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Matdodanso': 'TextEdit', });
lyr_DuongQuocLo_3.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_DuongSong_4.set('fieldImages', {'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_UBND_Huyen_5.set('fieldImages', {'id': 'TextEdit', 'TenUBND': 'TextEdit', });
lyr_Tinh_YenBai_0.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Huyen_YenBai_1.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', 'Matdodanso': 'no label', });
lyr_Matdodanso_2.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', 'Matdodanso': 'no label', });
lyr_DuongQuocLo_3.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_DuongSong_4.set('fieldLabels', {'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_UBND_Huyen_5.set('fieldLabels', {'id': 'no label', 'TenUBND': 'no label', });
lyr_UBND_Huyen_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});