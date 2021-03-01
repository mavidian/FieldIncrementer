# FieldIncrementer

Field Incrementer is a very simple browser extension to demonstrate how the web site
contents can be accessed and modified. It allows an input element of a web site to be
incremented in case its current contents is numeric (or empty, which is assumed to be 0).

This extension is inspired on https://www.youtube.com/watch?v=Olz4wo-ILwI and https://github.com/eviltester/counterstringjs

Sample page to test the extension's behavior: https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/english_bmi_calculator/bmi_calculator.html



## Installation

* Fork this repository and clone it onto your local machine, or

* Download this repository onto your local machine.

The extension was originally written for Chrome (v88.0.4324.190), but it was also successfully used on Edge (v88.0.705.81) and Firefox (v86.0) browsers.

To install on Chrome (as unpacked extension):

1. Launch Chrome web browser.

2. Click on the hamburger menu (3 vertical dots located in the upper right corner).

3. From the drop-down menu, select **More tools**, then **Extensions**.

4. Make sure **Developer mode** is turned on (upper right corner)

5. Click on the **Load unpacked** button.

6. In the pop-up dialog, navigate to the repository location (FieldIncrementer folder) and click **Select Foldder**.

## Usage

* Restart the browser.

* Navigate to a site that has editable input elements, for example https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/english_bmi_calculator/bmi_calculator.html.

* R-click on the input element, e.g. **Weight**.

* From the context menu, select **Increment Field Contents**.

* On the dialog enter **Increment by** value () and click OK.

* Notice the value of the input element has increased.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)

## Copyright

```
Copyright © 2021 Mavidian Technologies Limited Liability Company. All Rights Reserved.
```
