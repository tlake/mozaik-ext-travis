import React  from 'react';
import Mozaik from 'mozaik/browser';
import travis from 'mozaik-ext-travis';


const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;

Mozaik.Registry.addExtensions({ travis });

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
