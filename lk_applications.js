(function (d, $, S) {
	"use strict";
	const controller = "contenders.d";

	const saveDraft = d.getElementById("saveDraft");
	const send = d.getElementById("send");

	function switchStage() {
		const stages = d.querySelectorAll(".account-stages__link");
		const lastStages = d.querySelector(".account-stages");
		lastStages.lastChild.classList.add("active");
		d.forms[stages.length - 1].classList.remove("hide");
		stages.forEach((element) => {
			element.addEventListener("click", function (e) {
				e.preventDefault();
				stages.forEach((element) => {
					element.classList.remove("active");
					d.forms[element.dataset.stages].classList.add("hide");
				});
				element.classList.add("active");
				d.forms[element.dataset.stages].classList.remove("hide");
			});
		});
	}
	switchStage();
	function addReadOnly() {
		for (let i = 0; i != d.forms.length - 1; i++) {
			const formHide = d.forms[i];
			const inp = formHide.querySelectorAll("input");
			inp.forEach((element) => {
				element.setAttribute("readonly", "readonly");
			});
		}
	}
	addReadOnly();

	function workingWithFiles() {
		const addFile = d.querySelectorAll(".file-upload-browse");
		const hiddenInput = d.querySelectorAll(".file-upload-default");
		const sendFile = d.querySelectorAll(".sendFile");
		let dataset;
		let numberFileList = 0;
		addFiles();
		function addFiles() {
			addFile.forEach((element) => {
				element.setAttribute("data-numberFileList", numberFileList);
				numberFileList++;
				const fileList = d.createElement("div");
				element.after(fileList);
				element.onclick = (e) => {
					e.preventDefault();
					e.target.previousSibling.click();
					const target = e.target;
					dataset = target.dataset.numberfilelist;
					e.target.previousSibling.addEventListener("change", () => {
						showFilesName(fileList);
					});
				};
			});
		}
		function showFilesName(fileList) {
			let arrayFileList = [];
			hiddenInput.forEach((element) => {
				arrayFileList.push(element.files);
			});
			let file = Array.from(arrayFileList[dataset]);
			for (let i = 0; i < arrayFileList[dataset].length; i++) {
				const nameFile = d.createElement("a");
				nameFile.setAttribute("class", "application-table__block_value_link");
				// let close = `<p class="deliteFile" data-numberFile="${i}"> x </p>`
				nameFile.innerHTML = arrayFileList[dataset][i].name;
				let close = d.createElement("p");
				close.setAttribute("class", "deliteFile");
				close.innerHTML = "x";
				close.setAttribute("data-numberFile", i);
				nameFile.appendChild(close);
				fileList.append(nameFile);
				removeSelectedFile(file, close);
			}
			sendFiles();
		}
		function removeSelectedFile(file, close) {
			close.addEventListener("click", function (e) {
				e.preventDefault();
				let dataClosed = 0;
				document.querySelectorAll(".deliteFile").forEach((element) => {
					element.setAttribute("data-numberFile", dataClosed);
					dataClosed++;
				});
				const target = e.target;
				let numberfile = target.dataset.numberfile;
				this.parentElement.remove();
				file.splice(numberfile, 1);
				console.log(file);
			});
		}
		function sendFiles() {
			sendFile.forEach((element) => {
				element.addEventListener("click", function (e) {
					S.xhr({
						data: {
							controller: controller,
							action: "uploadFile",
							row: file,
							file: file,
						},
						onSuccess: (data) => {
							console.log(data);
						},
					});
				});
			});
		}
	}
	workingWithFiles();

	saveDraft.addEventListener("click", function (e) {
		S.xhr({
			data: {
				controller: controller,
				action: "saveAsDraft",
				// values: document.forms
			},
			onSuccess: (data) => {
				console.log(data);
			},
		});
	});
	send.addEventListener("click", function (e) {
		S.xhr({
			data: {
				controller: controller,
				action: "save",
				// values:
			},
			onSuccess: (data) => {
				console.log(data);
			},
		});
	});
})(document, jQuery, Sensei);
