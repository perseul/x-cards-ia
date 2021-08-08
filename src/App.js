import React, { useState, useEffect } from 'react';
import api from './api';

import "./style.css";

const App = () => {

	const [dadosTwitter, setDadosTwitter] = useState([]);
	const [termoPesquisa, setTermoPesquisa] = useState('');

    useEffect (() => {
		//getDadosApi();
	}, []);
    
	const getDadosApi = async () => {
		const response = await api.get(termoPesquisa, {
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': ' Bearer {{token}}'
			}
		})
		if(response.status === 200) {
			setDadosTwitter(response.data.statuses);
		} else {
			setDadosTwitter([]);
		}
	}
   
    return(
		<div>
			<div className="search-box">
				<input
					type = 'search' 
					value = {termoPesquisa}
					onChange = {e => {
						setTermoPesquisa(e.target.value);
					}}
				/>
				<button 
					type="button" 
					onClick={getDadosApi}>
					Buscar
				</button>
			</div>
			<div className="card-twitter">
				{dadosTwitter.map((val, key) => {
					return (
						<div className="card-twitter-item" key={key}>
							<div className="card-twitter-inner">
				
								<div className="user-profile">
									<img src={val.user.profile_image_url_https} alt='profile' />
									<div className="user-name">
										<strong>{val.user.name}</strong>
										<p>@{val.user.screen_name}</p>
									</div>
								</div>
								<div><p>{val.text}</p></div>
								<div>
									{val.entities.hashtags.map((val2, key2) => {
										return (
											<div key={key2}>
												<span>[#{val2.text}]</span>
											</div>
										)
									})}
								</div>
								<div className="flex-end">
									<div className="fs-14 color-2">{val.created_at} </div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
    	</div>
    )
}	

export default App;
