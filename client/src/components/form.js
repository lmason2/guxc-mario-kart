import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTime } from "../actions/times";

const Form = () => {
    const initFormData = {name: "", time: null, character: "", course: ""}
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initFormData);

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.time && formData.character && formData.course) {
            dispatch(createTime(formData))
            window.location.reload();
        }
        else {
            alert("Please fill out all fields");
        }
    }

    return (
        <form marginBottom="40px">
            <select name="name" id="name-select" onChange={(e) => setFormData({ ...formData, name: e.target.value })}>
                <option value="">--Please choose yourself--</option>

                <option value="wil">Wil</option>
                <option value="jerry">Jerry</option>
                <option value="cooper">Cooper</option>
                <option value="nicky">Nicky</option>
                <option value="mike">Mike</option>
                <option value="aidan">Aidan</option>
                <option value="kyle">Kyle</option>
                <option value="said">Said</option>
                <option value="ben-h">Ben H.</option>
                <option value="cullen">Cullen</option>
                <option value="yacine">Yacine</option>
                <option value="sam">Sam</option>
                <option value="dom">Dom</option>
                <option value="luke">Luke</option>
                <option value="riley">Riley</option>
                <option value="jake">Jake</option>
            </select>
            <input placeholder="Time" type="number" onChange={(e) => setFormData({ ...formData, time: e.target.value })} required={true} step="0.001" min="1"></input>
            <select name="course" id="course-select" onChange={(e) => setFormData({ ...formData, course: e.target.value })}>
                <option value="">--Please choose a course--</option>

                <option value="mario-kart-stadium">Mario Kart Stadium</option>
                <option value="water-park">Water Park</option>
                <option value="sweet-sweet-canyon">Sweet Sweet Canyon</option>
                <option value="thomp-ruins">Thwomp Ruins</option>

                <option value="mario-circuit">Mario Circuit</option>
                <option value="toad-harbour">Toad Harbour</option>
                <option value="twisted-mansion">Twisted Mansion</option>
                <option value="shy-guy-falls">Shy Guy Falls</option>

                <option value="sunshine-airport">Sunshine Airport</option>
                <option value="dolphin-shoals">Dolphin Shoals</option>
                <option value="electrodome">Electrodome</option>
                <option value="mount-wario">Mount Wario</option>

                <option value="cloudtop-cruise">Cloudtop Cruise</option>
                <option value="bone-dry-dunes">Bone Dry Dunes</option>
                <option value="bowsers-castle">Bowser's Castle</option>
                <option value="rainbow-road">Rainbow Road</option>

                <option value="yoshi-circuit">Yoshi Circuit</option>
                <option value="excitebike-arena">Excitebike Arena</option>
                <option value="dragon-driftway">Dragon Driftway</option>
                <option value="mute-city">Mute City</option>

                <option value="baby-park">Baby Park</option>
                <option value="cheese-land">Cheese Land</option>
                <option value="wild-woods">Wild Woods</option>
                <option value="animal-crossing">Animal Crossing</option>
                
                <option value="moo-moo-meadows">Moo Moo Meadows (Wii)</option>
                <option value="mario-circuit-gba">Mario Circuit (GBA)</option>
                <option value="cheep-cheep-beach">Cheep Cheep Beach (DS)</option>
                <option value="toads-turnpike">Toad's Turnpike (N64)</option>

                <option value="dry-dry-desert">Dry Dry Desert (GCN)</option>
                <option value="royal-raceway">Royal Raceway (N64)</option>
                <option value="dk-jungle">DK Jungle (3DS)</option>
                <option value="donut-plains-3">Donut Plains 3 (SNES)</option>

                <option value="wario-stadium">Wario Stadium (DS)</option>
                <option value="sherbet-land">Sherbet Land (GCN)</option>
                <option value="music-park">Music Park (3DS)</option>
                <option value="yoshi-valley">Yoshi Valley (N64)</option>

                <option value="tick-tock-clock">Tick-Tock Clock (DS)</option>
                <option value="piranha-plant-slide">Piranha Plant Slide (3DS)</option>
                <option value="grumble-volcano">Grumble Volcano (Wii)</option>
                <option value="rainbow-rows-n64">Rainbow Road (N64)</option>

                <option value="warios-gold-mine">Wario's Gold Mine</option>
                <option value="rainbow-road-snes">Rainbow Road (SNES)</option>
                <option value="ice-ice-outpost">Ice Ice Outpost</option>
                <option value="rainbow-rows-n64">Rainbow Road (N64)</option>

                <option value="neo-bowser-city">Neo Bowser City</option>
                <option value="ribbon-road">Ribbon Road</option>
                <option value="super-bell-subway">Super Bell Subway</option>
                <option value="big-blue">Big Blue</option>
            </select>
            <select name="character" id="character-select" onChange={(e) => setFormData({ ...formData, character: e.target.value })}>
                <option value="">--Please choose a character--</option>

                <option value="mario">Mario</option>
                <option value="luigi">Luigi</option>
                <option value="peach">Peach</option>
                <option value="yoshi">Yoshi</option>
                <option value="bowser">Bowser</option>
                <option value="toad">Toad</option>
                <option value="dk">DK</option>
                <option value="koopa-troopa">Koopa Troopa</option>
                <option value="daisy">Daisy</option>
                <option value="shy-guy">Shy Guy</option>
                <option value="wario">Wario</option>
                <option value="waluigi">Waluigi</option>
                <option value="baby-mario">Baby Mario</option>
                <option value="baby-luigi">Baby Luigi</option>
                <option value="rosalina">Rosalina</option>
                <option value="toadette">Toadette</option>
                <option value="metal-mario">Metal Mario</option>
                <option value="lakitu">Lakitu</option>
                <option value="larry">Larry</option>
                <option value="morton">Morton</option>
                <option value="wendy">Wendy</option>
                <option value="iggy">Iggy</option>
                <option value="roy">Roy</option>
                <option value="lemmy">Lemmy</option>
                <option value="ludwig">Ludwig</option>
                <option value="pink-gold-peach">Pink Gold Peach</option>
                <option value="baby-rosalina">Baby Rosalina</option>
                <option value="mii">Mii</option>
            </select>
            <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default Form;